import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  user-select: none;
  -webkit-user-select: none;

  h1 {
    color: var(--color-green);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    h1 {
      margin-bottom: 0;
    }

    p {
      margin-bottom: 0.8rem;
    }
  }
`;

export const GameBoard = styled.div`
  position: relative;
  /* width: 100vmin;
  height: 100vmin; */
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-rows: repeat(21, 1fr);
  grid-template-columns: repeat(21, 1fr);
  border: solid 1px var(--color-offwhite);

  .snake {
    background: hsl(200, 100%, 50%);
    border-radius: 20%;
  }

  .food {
    background: hsl(50, 100%, 50%);
    border-radius: 50%;
  }

  .instructions {
    position: absolute;
    width: 100%;
    top: 2rem;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 350px;
    height: 350px;
  }
`;

export const Points = styled.div`
  position: absolute;
  right: 0.2rem;
  /* top: -1.8rem; */
  font-size: 1.2rem;
`;

export const Arrows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 50px;
      height: 50px;
      margin: 0.5rem;
    }
  }
`;

export const GameOver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;

  background: rgba(0, 0, 0, 0.5);

  div.modal {
    padding: 1.5rem 1rem;
    background: var(--color-offwhite);
    color: var(--color-dark);
    border-radius: 0.7rem;

    h3 {
      color: var(--color-red);
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    div.btn-group {
      text-align: right;

      button:nth-child(2) {
        margin-left: 1rem;
      }
    }
  }
`;
