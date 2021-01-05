import React from 'react';
import { getDeviceType } from '../../helpers';
import { Container, GameBoard, GameOver, Points, Arrows } from './styles';
import useGame, { POINTS_MINIMUM } from './useGame';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from '../../icons';
import { useHistory } from 'react-router-dom';

const SnakeGame: React.FC = () => {
  const {
    pass,
    gamestarted,
    gameover,
    snakeBody,
    food,
    points,
    gameStart,
    handleArrow,
  } = useGame();

  const desktop: boolean = getDeviceType() === 'desktop';

  const history = useHistory();
  const handleNextGame = (): void => {
    history.push('/destroyer');
  };

  return (
    <Container>
      <h1>Snake Game</h1>

      <p>Faça pelo menos {POINTS_MINIMUM} pontos para ir ao proximo level.</p>

      <GameBoard>
        <Points style={{ color: !pass ? '#CB4B4B' : '#00be9e' }}>
          {points}
        </Points>

        {!gamestarted && (
          <div className="instructions">
            Use as setas {desktop && 'do teclado'} para jogar
          </div>
        )}
        {snakeBody.map((snake, index) => (
          <div
            className="snake"
            key={index}
            style={{
              gridRowStart: snake.y,
              gridColumnStart: snake.x,
            }}
          ></div>
        ))}

        {food && (
          <div
            className="food"
            style={{
              gridRowStart: food.y,
              gridColumnStart: food.x,
            }}
          ></div>
        )}
      </GameBoard>

      {!desktop && (
        <Arrows>
          <div>
            <button type="button" onClick={() => handleArrow('up')}>
              <ArrowUp width={30} />
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleArrow('left')}>
              <ArrowLeft width={30} />
            </button>
            <button type="button" onClick={() => handleArrow('down')}>
              <ArrowDown width={30} />
            </button>
            <button type="button" onClick={() => handleArrow('right')}>
              <ArrowRight width={30} />
            </button>
          </div>
        </Arrows>
      )}

      {gameover && (
        <GameOver>
          <div className="modal">
            <h3>Game Over</h3>
            <p>
              {pass
                ? 'Parabens! Você atingiu os pontos necessários para ir ao próximo level.'
                : 'Você não atingiu os pontos necessários para ir ao próximo level.'}
            </p>
            <div className="btn-group">
              <button type="button" className="btn-dark" onClick={gameStart}>
                Tentar novamente
              </button>
              {pass && (
                <button
                  type="button"
                  className="btn-green"
                  onClick={handleNextGame}
                >
                  Próximo level
                </button>
              )}
            </div>
          </div>
        </GameOver>
      )}
    </Container>
  );
};

export default SnakeGame;
