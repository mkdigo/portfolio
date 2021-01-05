import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 80px 20px;
  width: 100%;

  div.content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;

    div {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      &:nth-child(2) {
        align-items: flex-start;
      }

      img {
        width: 300px;
        border-radius: 10px;
        margin-right: 20px;
      }

      a {
        margin-left: 20px;
      }

      ul {
        flex-direction: column;

        li {
          font-size: 1.2rem;

          & + li {
            margin-top: 0.8rem;
          }

          span {
            display: inline-block;
            font-weight: bold;
            width: 110px;
          }
        }
      }
    }

    @media (max-width: 950px) {
      flex-direction: column;
    }

    @media (max-width: 685px) {
      div:first-child {
        flex-direction: column;

        img {
          margin-bottom: 1rem;
        }
      }

      div:nth-child(2) {
        justify-content: center;
      }
    }
  }
`;
