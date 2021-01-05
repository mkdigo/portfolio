import React, { useRef, useState } from 'react';
import useGame from './useGame';

import { Container, InitialContainer, GameOverContainer } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { getDeviceType } from '../../helpers';

const DestroyerGame: React.FC = () => {
  const history = useHistory();
  if (getDeviceType() !== 'desktop') history.push('/skills');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [start, setStart] = useState<boolean>(false);

  const { gameOver, init, score } = useGame(canvasRef);

  const handleStart = (): void => {
    setStart(true);
    init();
  };

  return (
    <Container>
      <canvas ref={canvasRef}></canvas>

      <h1>Destroyer Game</h1>

      <p>Faça no mínimo 10.000 pontos.</p>

      <div className="scoreContainer">
        <span>Score</span>
        <div className="score"></div>
      </div>

      {!start && (
        <InitialContainer>
          <h2>Instruções</h2>
          <p>
            Use as setas do teclado para movimentar a nave e o botão esquerdo do
            mouse para atirar. Faça no mínimo 10.000 pontos para passar.
          </p>
          <button className="btn-green" onClick={handleStart}>
            Iniciar
          </button>
        </InitialContainer>
      )}

      {gameOver && (
        <GameOverContainer>
          <h2>Game Over</h2>
          <p>
            {score > 10000
              ? 'Parabens, você conseguiu alcançar os pontos mínimos para passar.'
              : 'Que pena, você não atingiu os pontos necessários. Tente novamente.'}
          </p>
          <div>
            <button className="btn-dark" onClick={handleStart}>
              Jogar novamente
            </button>
            {score >= 10000 && (
              <Link to="/skills" className="btn btn-green">
                Avançar
              </Link>
            )}
          </div>
        </GameOverContainer>
      )}
    </Container>
  );
};

export default DestroyerGame;
