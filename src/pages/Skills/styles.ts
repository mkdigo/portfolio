import styled, { keyframes } from 'styled-components';

const logoContainerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const logoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.main`
  user-select: none;
  -webkit-user-select: none;

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .tip {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 0.8rem;
  }
`;

export const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;

  div {
    position: absolute;
    width: 80vmin;
    height: 80vmin;
    animation: ${logoContainerAnimation} 90s linear infinite;

    @media (max-width: 550px) {
      width: 95vmin;
      height: 95vmin;
    }

    svg {
      position: absolute;
      animation: ${logoAnimation} 90s linear infinite;
    }

    #php {
      width: 70px;
      height: 70px;
      left: calc(50% - 35px);
      top: 0;
    }

    #laravel {
      width: 70px;
      height: 70px;
      top: 25%;
      right: 20px;
    }

    #js {
      width: 60px;
      height: 60px;
      top: 65%;
      right: 20px;
    }

    #html {
      width: 90px;
      height: 90px;
      left: calc(50% - 45px);
      top: calc(50% - 45px);
    }

    #css {
      width: 100px;
      height: 100px;
      bottom: 0;
      left: calc(50% - 50px);
    }

    #react {
      width: 70px;
      height: 70px;
      top: 65%;
      left: 20px;
    }

    #typescript {
      width: 60px;
      height: 60px;
      top: 25%;
      left: 20px;
    }
  }
`;
