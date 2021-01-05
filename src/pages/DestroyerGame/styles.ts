import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  h1 {
    color: var(--color-green);
    font-size: 2.5rem;
  }

  div.scoreContainer {
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;

    top: 30px;
    right: 30px;
    font-size: 1.5rem;

    div.score {
    }
  }
`;

export const InitialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 480px;
  padding: 1rem;
  margin-top: 5rem;

  background: var(--color-offwhite);
  color: var(--color-dark);
  border-radius: 0.5rem;

  button {
    margin-top: 0.5rem;
  }
`;

export const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 480px;
  padding: 1rem;
  margin-top: 5rem;

  background: var(--color-offwhite);
  color: var(--color-dark);
  border-radius: 0.5rem;

  h2 {
    color: var(--color-red);
  }

  div {
    button {
      margin-top: 0.5rem;
    }

    a {
      margin-left: 1rem;
    }
  }
`;
