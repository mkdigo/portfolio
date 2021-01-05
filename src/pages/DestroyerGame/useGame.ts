import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import Enemy from './Enemy';
import Particle from './Particle';
import Player from './Player';
import Projectile from './Projectile';

const ENEMY_VELOCITY: number = 3;
const ENEMY_SPAWN_TIME: number = 300;
const PROJECTILE_VELOCITY: number = 5;
const PLAYER_VELOCITY: number = 5;

const player: Player = new Player(
  window.innerWidth / 2,
  window.innerHeight - 100,
  25,
  '#fff'
);

const projectiles: Projectile[] = [];
const enemies: Enemy[] = [];
const particles: Particle[] = [];

var score: number = 0;

const usePlayer = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const animateRef = useRef<number>(0);
  const enemiesRef = useRef<NodeJS.Timeout>();
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Player moviment
  const playerMove = useCallback((e: KeyboardEvent): void => {
    switch (e.key) {
      case 'ArrowLeft':
        player.dx = -PLAYER_VELOCITY;
        break;
      case 'ArrowRight':
        player.dx = PLAYER_VELOCITY;
        break;
    }
  }, []);

  const playerStop = useCallback((): void => {
    player.dx = 0;
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', playerMove);
    window.addEventListener('keyup', playerStop);

    return () => {
      window.removeEventListener('keydown', playerMove);
      window.addEventListener('keyup', playerStop);
    };
  }, [playerMove, playerStop]);

  // Projectiles Create
  const projectilesCreate = useCallback((event: MouseEvent) => {
    const variation: number = 30;

    const angle = Math.atan2(
      event.clientY - player.y + variation,
      event.clientX - player.x
    );

    const velocity = {
      x: Math.cos(angle) * PROJECTILE_VELOCITY,
      y: Math.sin(angle) * PROJECTILE_VELOCITY,
    };

    projectiles.push(
      new Projectile(player.x, player.y - variation, 5, '#FFF', velocity)
    );
  }, []);

  useEffect(() => {
    window.addEventListener('click', projectilesCreate);

    return () => window.removeEventListener('click', projectilesCreate);
  }, [projectilesCreate]);

  const projectilesUpdate = useCallback((ctx: CanvasRenderingContext2D) => {
    projectiles.forEach((projectile, index) => {
      projectile.update(ctx);

      // remove from edges of screen
      if (
        projectile.x + projectile.radius < 0 ||
        projectile.x - projectile.radius > window.innerWidth ||
        projectile.y + projectile.radius < 0 ||
        projectile.y - projectile.radius > window.innerHeight
      ) {
        projectiles.splice(index, 1);
      }
    });
  }, []);

  // Enemies
  const respawnEnemies = () => {
    enemiesRef.current = setInterval(() => {
      const radius = Math.random() * (30 - 4) + 4;

      let x;
      let y;

      if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : window.innerWidth + radius;
        y = (Math.random() * window.innerHeight) / 2;
      } else {
        x = Math.random() * window.innerWidth;
        y = 0 - radius;
      }
      const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
      const angle = Math.atan2(player.y - y, player.x - x);

      const velocity = {
        x: Math.cos(angle) * ENEMY_VELOCITY,
        y: Math.sin(angle) * ENEMY_VELOCITY,
      };

      enemies.push(new Enemy(x, y, radius, color, velocity));
    }, ENEMY_SPAWN_TIME);
  };

  const enemiesUpdate = useCallback((ctx: CanvasRenderingContext2D) => {
    enemies.forEach((enemy, enemyIndex) => {
      enemy.update(ctx);

      const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);

      // end game
      if (dist - enemy.radius - player.radius < 1) {
        cancelAnimationFrame(animateRef.current);
        setGameOver(true);
        if (enemiesRef.current) clearTimeout(enemiesRef.current);
      }

      // when projectilies touch enemy
      projectiles.forEach((projectile, projectileIndex) => {
        const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);

        if (dist - enemy.radius - projectile.radius < 1) {
          // create explosions
          for (let i = 0; i < enemy.radius * 2; i++) {
            particles.push(
              new Particle(
                projectile.x,
                projectile.y,
                Math.random() * 2,
                enemy.color,
                {
                  x: (Math.random() - 0.5) * (Math.random() * 6),
                  y: (Math.random() - 0.5) * (Math.random() * 6),
                }
              )
            );
          }

          if (enemy.radius - 10 > 5) {
            // increase our score
            score += 100;
            enemy.radius = enemy.radius - 10;
            projectiles.splice(projectileIndex, 1);
          } else {
            // remove from scene altogether
            score += 250;
            projectiles.splice(projectileIndex, 1);
            enemies.splice(enemyIndex, 1);
          }
        }
      });

      // remove from edges of screen
      if (enemy.y - enemy.radius > window.innerHeight) {
        enemies.splice(enemyIndex, 1);
      }
    });
  }, []);

  const particlesUpdate = useCallback((ctx: CanvasRenderingContext2D) => {
    particles.forEach((particle, index) => {
      particle.update(ctx);
      if (particle.alpha <= 0) particles.splice(index, 1);
    });
  }, []);

  // Window resize
  const canvasResize = useCallback((): void => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      if (player.x + player.radius >= window.innerWidth)
        player.x = window.innerWidth - player.radius - 30;
    }
  }, [canvasRef]);

  useEffect(() => {
    canvasResize();
    window.addEventListener('resize', canvasResize);

    return () => window.removeEventListener('resize', canvasResize);
  }, [canvasResize]);

  // Animate
  const animate = useCallback((): void => {
    animateRef.current = window.requestAnimationFrame(animate);
    const ctx = canvasRef.current?.getContext('2d');
    document.querySelector('.score')!.innerHTML = String(score);

    if (canvasRef.current && ctx) {
      ctx.fillStyle = 'rgba(70, 70, 70, 1)';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current!.height);

      player.draw(ctx);

      projectilesUpdate(ctx);
      enemiesUpdate(ctx);
      particlesUpdate(ctx);
    }
  }, [canvasRef, projectilesUpdate, enemiesUpdate, particlesUpdate]);

  const init = useCallback((): void => {
    enemies.splice(0, enemies.length);
    setGameOver(false);
    score = 0;
    animate();
    respawnEnemies();
  }, [animate]);

  useEffect(() => {
    // animate();

    return () => {
      window.cancelAnimationFrame(animateRef.current);
      if (enemiesRef.current) clearTimeout(enemiesRef.current);
    };
  }, []);

  return { gameOver, init, score };
};

export default usePlayer;
