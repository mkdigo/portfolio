import { useCallback, useEffect, useRef, useState } from 'react';
import { IDirection } from './interfaces';

const GRID_SIZE: number = 21;
const SNAKE_SPEED: number = 5;
const POINTS_RATE: number = 10;
export const POINTS_MINIMUM: number = 200;
const INITIAL_POSITION: IDirection[] = [
  { x: 11, y: 11 },
  { x: 11, y: 12 },
  { x: 11, y: 13 },
  { x: 11, y: 14 },
  { x: 11, y: 15 },
  { x: 11, y: 16 },
  { x: 11, y: 17 },
  { x: 11, y: 18 },
];

const useGame = () => {
  const animateRef = useRef<number>(0);

  const [points, setPoints] = useState<number>(0);
  const [gamestarted, setGameStarted] = useState<boolean>(false);
  const [gameover, setGameover] = useState<boolean>(false);
  const [pass, setPass] = useState<boolean>(false);
  const [lastRenderTime, setLastRenderTime] = useState<number>(0);
  const [snakeBody, setSnakeBody] = useState<IDirection[]>(INITIAL_POSITION);
  const [lastInputDirection, setLastInputDirection] = useState<IDirection>({
    x: 0,
    y: 0,
  });
  const [food, setFood] = useState<IDirection>(randomGridPosition());

  function randomGridPosition(): IDirection {
    return {
      x: Math.floor(Math.random() * GRID_SIZE) + 1,
      y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
  }

  function equalPositions(pos1: IDirection, pos2: IDirection): boolean {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  }

  function gameStart(): void {
    setPoints(0);
    setLastInputDirection({ x: 0, y: 0 });
    setSnakeBody(INITIAL_POSITION);
    setGameStarted(false);
    setGameover(false);
    setPass(false);
  }

  const gameOver = useCallback((): void => {
    setGameover(true);
  }, []);

  // Snake
  const onSnake = useCallback(
    (snake: IDirection[], food: IDirection): boolean => {
      return snake.some((segment) => {
        return equalPositions(segment, food);
      });
    },
    []
  );

  const snakeUpdate = useCallback(
    (inputDirection: IDirection): void => {
      const newSnakePosition: IDirection[] = [
        {
          x: snakeBody[0].x + inputDirection.x,
          y: snakeBody[0].y + inputDirection.y,
        },
      ];

      for (let i = snakeBody.length - 2; i >= 0; i--) {
        newSnakePosition[i + 1] = { x: snakeBody[i].x, y: snakeBody[i].y };
      }

      // add segment if it eat the food
      if (onSnake(newSnakePosition, food)) {
        newSnakePosition[snakeBody.length] = {
          x: snakeBody[snakeBody.length - 1].x,
          y: snakeBody[snakeBody.length - 1].y,
        };
      }

      // if the head hits the body
      const headHit: boolean = newSnakePosition.some((segment, index) => {
        if (index === 0) return false;
        return equalPositions(segment, newSnakePosition[0]);
      });

      if (headHit) gameOver();

      // if the head hits the wall
      if (
        newSnakePosition[0].x <= 0 ||
        newSnakePosition[0].x >= 22 ||
        newSnakePosition[0].y <= 0 ||
        newSnakePosition[0].y >= 22
      )
        gameOver();

      setSnakeBody(newSnakePosition);
    },
    [snakeBody, onSnake, food, gameOver]
  );

  const setDirection = useCallback(
    (e: KeyboardEvent): void => {
      let inputDirection: IDirection = lastInputDirection;

      if (lastInputDirection.x === 0 && lastInputDirection.y === 0)
        inputDirection = { x: 0, y: -1 };
      else {
        switch (e.key) {
          case 'ArrowUp':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
          case 'ArrowDown':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
          case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
          case 'ArrowRight':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
        }
      }
      setLastInputDirection(inputDirection);
      if (!gamestarted) setGameStarted(true);
    },
    [lastInputDirection, gamestarted]
  );

  const handleArrow = (direction: 'up' | 'down' | 'left' | 'right'): void => {
    let inputDirection: IDirection = lastInputDirection;
    switch (direction) {
      case 'up':
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: -1 };
        break;
      case 'down':
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: 1 };
        break;
      case 'left':
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: -1, y: 0 };
        break;
      case 'right':
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: 1, y: 0 };
        break;
    }
    setLastInputDirection(inputDirection);
    if (!gamestarted) setGameStarted(true);
  };

  // Food

  const foodUpdate = useCallback((): void => {
    if (onSnake(snakeBody, food)) {
      let newPosition: IDirection = randomGridPosition();

      // not respawn on snake
      while (onSnake(snakeBody, newPosition)) {
        newPosition = randomGridPosition();
      }
      setFood(newPosition);
      setPoints(points + POINTS_RATE);
      if (points + POINTS_RATE >= POINTS_MINIMUM) setPass(true);
    }
  }, [onSnake, points, snakeBody, food]);

  const main = useCallback(
    (currentTime) => {
      animateRef.current = window.requestAnimationFrame(main);
      const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
      if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
      setLastRenderTime(currentTime);
      foodUpdate();
      if (lastInputDirection.x !== 0 || lastInputDirection.y !== 0)
        snakeUpdate(lastInputDirection);
    },
    [lastRenderTime, lastInputDirection, snakeUpdate, foodUpdate]
  );

  useEffect(() => {
    if (!gameover) {
      window.addEventListener('keydown', setDirection);
      main(animateRef.current);
    }
    return () => {
      window.removeEventListener('keydown', setDirection);
      window.cancelAnimationFrame(animateRef.current);
    };
  }, [main, snakeBody, setDirection, gameover]);

  return {
    gamestarted,
    gameover,
    pass,
    snakeBody,
    food,
    points,
    gameStart,
    handleArrow,
  };
};

export default useGame;
