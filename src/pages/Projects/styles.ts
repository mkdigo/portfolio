import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px;
`;

export const Card = styled.div`
  display: flex;
  border: solid 1px var(--color-offwhite);
  border-radius: 10px;
  width: 100%;
  max-width: 1400px;
  padding: 1.2rem 1rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;

    div:first-child {
      margin-bottom: 1rem;
    }
  }

  div {
    margin: 0 0.8rem;
  }

  div.img {
    a {
      display: flex;
    }

    img {
      width: 400px;
      height: 250px;
      border-radius: 10px;
      object-fit: cover;
      object-position: top center;

      @media (max-width: 460px) {
        width: 100%;
        height: 200px;
      }
    }
  }

  div.txt {
    max-width: 100%;

    h2 {
      margin-bottom: 0.5rem;
      text-decoration: underline;
    }

    p {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;

      a {
        display: block;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      a:hover {
        color: var(--color-green);
      }
    }
  }
`;
