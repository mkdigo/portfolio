import { RefObject, useCallback, useEffect, useRef } from 'react';
import Particle from './Particle';

const COLORS = ['#2185c5', '#7ecefd', '#fff6e5', '#ff7f66'];

function init(): Particle[] {
  let particlesArray = [];

  for (let i = 0; i < 400; i++) {
    const canvasWidth =
      window.innerWidth < window.innerHeight
        ? window.innerHeight
        : window.innerWidth;
    const canvasHeight =
      window.innerWidth > window.innerHeight
        ? window.innerWidth
        : window.innerHeight;

    const x = Math.random() * canvasWidth - canvasWidth / 2;
    const y = Math.random() * canvasHeight - canvasHeight / 2;
    const radius = Math.random() * 2;
    const index = Math.floor(Math.random() * COLORS.length);

    particlesArray.push(new Particle(x, y, radius, COLORS[index]));
  }

  return particlesArray;
}

const useUniverse = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const animateRef = useRef<number>(0);

  const canvasResize = useCallback((): void => {
    canvasRef.current!.width = window.innerWidth;
    canvasRef.current!.height = window.innerHeight;
  }, [canvasRef]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    let particles: Particle[] = init();
    let radians: number = 0;
    let alpha: number = 1;
    let mouseDown: boolean = false;

    canvasResize();

    window.addEventListener('resize', () => {
      canvasResize();
      particles = init();
    });

    window.addEventListener('mousedown', () => {
      mouseDown = true;
    });

    window.addEventListener('mouseup', () => {
      mouseDown = false;
    });

    window.addEventListener('touchstart', () => {
      mouseDown = true;
    });

    window.addEventListener('touchend', () => {
      mouseDown = false;
    });

    function animate() {
      if (ctx) {
        animateRef.current = requestAnimationFrame(animate);
        ctx.fillStyle = `rgba(10, 10, 10, ${alpha})`;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.save();
        ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
        ctx.rotate(radians);

        particles.forEach((particle) => {
          particle.update(ctx);
        });

        ctx.restore();

        radians += 0.001;

        if (mouseDown) radians += 0.01;
        if (mouseDown) radians += 0.01;
        else if (!mouseDown) radians += 0.001;

        if (mouseDown && alpha >= 0.03) alpha -= 0.01;
        else if (!mouseDown && alpha < 1) alpha += 0.01;
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animateRef.current);
      window.removeEventListener('mousedown', () => {
        mouseDown = true;
      });

      window.removeEventListener('resize', () => {
        canvasResize();
        particles = init();
      });

      window.removeEventListener('mouseup', () => {
        mouseDown = false;
      });

      window.removeEventListener('touchstart', () => {
        mouseDown = true;
      });

      window.removeEventListener('touchend', () => {
        mouseDown = false;
      });
    };
  }, [canvasResize, canvasRef]);
};

export default useUniverse;
