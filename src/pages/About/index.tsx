import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="content fade-in-left">
        <h1>Tecnologia usada</h1>

        <p>
          Esse site foi feito utilizando React com Typescript, e para rotas foi
          feito o uso da biblioteca react-route-dom.
        </p>
        <p>
          O primeiro jogo (Snake) foi feito utilizando apenas elementos HTML e
          CSS Grid para posicionar a cobra. Já no segundo jogo (Destroyer) e o
          universo da página Skills foi feito através do Canvas.
        </p>

        <h2>Objetivo</h2>

        <p>
          O objetivo desse site é demonstrar um pouco do meu conhecimento de
          forma prática. Você pode encontrar o código no GitHub através do link{' '}
          <a
            href="https://github.com/mkdigo/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/mkdigo/portfolio
          </a>
          . Fique a vontade para clonar esse projeto ou até mesmo deixar sua
          opinião sobre ele.
        </p>
      </div>
    </Container>
  );
};

export default About;
