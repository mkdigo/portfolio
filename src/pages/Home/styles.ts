import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;
    height: 100vh;
  }

  @media (max-width: 884px) {
    section {
      width: 100%;
      height: unset;
    }
  }
`;

export const Left = styled.section`
  background: var(--color-green);
  border-radius: 0 5% 50% 0;
  padding: 20px;

  h1 {
    font-size: 42px;
    color: var(--color-dark);
    text-align: center;
  }

  @media (max-width: 884px) {
    border-radius: 0;

    h1 {
      font-size: 36px;
    }
  }
`;

export const Right = styled.section`
  font-size: 24px;
  padding: 40px 20px;

  p {
    text-align: center;
  }

  a {
    margin: 30px 0;
    min-width: 200px;
    text-align: center;

    &.btn-danger {
      font-size: 16px;
    }
  }

  @media (max-width: 645px) {
    font-size: 20px;
  }
`;
