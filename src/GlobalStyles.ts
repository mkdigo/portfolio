import { createGlobalStyle, keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }

  :root {
    --color-dark: #404040;
    --color-red: #CB4B4B;
    --color-green: #00be9e;
    --color-offwhite: #e5e5e5;
  }

  body {
    background: var(--color-dark);
    color: var(--color-offwhite);
    font-size: 16px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  input, select, button, textarea {
    font-size: 16px;
    padding: 5px 10px;
  }

  ul {
    display: flex;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  canvas {
    user-select: none;
    -webkit-user-select: none;
  }

  button, .btn {
    cursor: pointer;
    background: var(--color-offwhite);
    color: var(--color-dark);
    border-radius: 5px;
    border: none;
    padding: 5px 10px;

    &:hover {
      filter: contrast(150%);
    }
  }

  .btn-green {
    background: var(--color-green);
  }
  
  .btn-danger {
    background: var(--color-red);
    color: var(--color-offwhite);
  }
  
  .btn-dark {
    background: var(--color-dark);
    color: var(--color-offwhite);
  }

  .fade-in-left {
    animation: ${fadeInLeft} 1s ease-in;
  }

  .fade-in-right {
    animation: ${fadeInRight} 1s ease-in;
  }
`;
