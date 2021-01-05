import React from 'react';
import Header from '../../components/Header';
import pokemon from '../../images/pokemon.png';
import exchangerate from '../../images/exchange_rate.png';
import music from '../../images/music.png';

import { Container, Card } from './styles';

const Projects: React.FC = () => {
  return (
    <Container>
      <Header />

      <Card>
        <div className="img fade-in-left">
          <a
            href="https://rodrigomukudai.com/pokemon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pokemon} alt="Pokemon Page" />
          </a>
        </div>
        <div className="txt fade-in-right">
          <h2>Infinite scroll</h2>

          <p>
            O objetivo desse projeto é demonstrar a técnica do scroll infinito,
            assim como o feed do facebook. Foi usado a API
            https://www.pokeapi.co para fazer uma listagem dos pokemons, no qual
            a cada requisição parte dessa lista é carregada. Com a função
            Javascript IntersectionObserver, assim que o ultimo elemento aparece
            em tela é feito uma nova requisição para buscar a próxima página e
            acrescentar na tela. Projeto feito em React.
          </p>
          <p>
            <a
              href="https://rodrigomukudai.com/pokemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rodrigomukudai.com/pokemon
            </a>
            <a
              href="https://github.com/mkdigo/infinite-scroll"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/mkdigo/infinite-scroll
            </a>
          </p>
        </div>
      </Card>

      <Card>
        <div className="txt fade-in-left">
          <h2>Conversor de Moedas</h2>

          <p>
            Feito em React e utilizando a API https://exchangerate.host, você
            consegue visualizar através de um gráfico a cotação entre duas
            moedas da sua escolha, além de poder fazer a conversão de valores.
            Para construção do gráfico foi usado a biblioteca chart.js e
            react-chartjs-2.
          </p>
          <p>
            <a
              href="https://rodrigomukudai.com/exchange_rate"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rodrigomukudai.com/exchange_rate
            </a>
            <a
              href="https://github.com/mkdigo/exchangerate"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/mkdigo/exchangerate
            </a>
          </p>
        </div>
        <div className="img fade-in-right">
          <a
            href="https://rodrigomukudai.com/exchange_rate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={exchangerate} alt="Exchange Rate Page" />
          </a>
        </div>
      </Card>

      <Card>
        <div className="img fade-in-left">
          <a
            href="https://rodrigomukudai.com/lyrics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={music} alt="Music Page" />
          </a>
        </div>
        <div className="txt fade-in-right">
          <h2>Letras de músicas</h2>

          <p>
            Outro projeto feito em React no qual foi usado a API
            https://www.vagalume.com.br. Nele você é capaz de buscar a letra e a
            tradução (caso seja internacional) da sua música favorita, basta
            digitar o nome artista e nome da música.
          </p>
          <p>
            <a
              href="https://rodrigomukudai.com/lyrics"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rodrigomukudai.com/lyrics
            </a>
            <a
              href="https://github.com/mkdigo/find-lyrics"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/mkdigo/find-lyrics
            </a>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Projects;
