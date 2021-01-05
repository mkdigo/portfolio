import styled from 'styled-components';

type IProps = {
  bgDisabled?: boolean;
};

export const Container = styled.header<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ bgDisabled }) =>
    !bgDisabled ? 'var(--color-green)' : 'transparent'};
  padding: 0.7rem;
  overflow: hidden;

  nav {
    ul {
      display: flex;
      justify-content: space-around;

      li {
        position: relative;
        font-size: 1.2rem;
        font-weight: bold;
        color: ${({ bgDisabled }) =>
          bgDisabled ? 'var(--color-offwhite)' : '#000'};
        transition: 0.3s;

        &:hover {
          color: ${({ bgDisabled }) =>
            bgDisabled ? 'var(--color-green)' : 'var(--color-offwhite)'};
          transform: scale(1.2);
        }

        .current-page {
          color: ${({ bgDisabled }) =>
            bgDisabled ? 'var(--color-green)' : 'var(--color-offwhite)'};
        }

        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    left: unset;
    top: 70px;
    right: -100%;
    padding: unset;
    border-radius: 10px 0 0 10px;
    transition: 0.3s;
    background: var(--color-green);

    &.mobile-menu-active {
      right: 0;
    }

    nav {
      ul {
        flex-direction: column;

        li {
          color: #000;

          &:hover {
            color: var(--color-offwhite);
          }

          .current-page {
            color: var(--color-offwhite);
          }

          & + li {
            border-top: solid 1px var(--color-dark);
          }

          a {
            padding: 1.5rem 3rem;
          }
        }
      }
    }
  }

  button.mobile {
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;

    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;

    background: var(--color-green);
    color: var(--color-dark);
    border-radius: 10%;

    svg {
      width: 100%;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;
