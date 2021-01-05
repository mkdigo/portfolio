import React from 'react';
import { Link } from 'react-router-dom';
import { Left, Right } from './styles';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Left className="fade-in-left">
        <h1>Seja bem-vindo ao meu site!</h1>
      </Left>
      <Right className="fade-in-right">
        <p>
          Meu nome é Rodrigo Mukudai
          <br />
          e sou desenvolvedor web no Japão.
          <br />
          <br />
          Te convido a me conhecer melhor de uma forma divertida clicando no
          botão logo abaixo.
        </p>

        <Link to="/snake" className="btn btn-green">
          Start
        </Link>

        <p>
          Ou pule direto para meu perfil caso você não tenha tempo ou paciência.
        </p>

        <Link to="/skills" className="btn btn-danger">
          Não me faça perder tempo :(
        </Link>
      </Right>
    </Container>
  );
};

export default Home;
