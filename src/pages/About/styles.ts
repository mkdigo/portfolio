import styled from 'styled-components';

export const Container = styled.main`
  padding: 70px 20px;
  display: flex;
  justify-content: center;

  div.content {
    width: 100%;
    max-width: 1200px;

    h1,
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    h2 {
      margin-top: 2rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      line-height: 1.8rem;

      a {
        color: var(--color-green);
      }
    }
  }
`;
