import React, { useRef } from 'react';
import Header from '../../components/Header';

import { Container, Logos } from './styles';
import Js from '../../svg/Js';
import Html from '../../svg/Html';
import Css from '../../svg/Css';
import Php from '../../svg/Php';
import Laravel from '../../svg/Laravel';
import ReactSvg from '../../svg/ReactSvg';
import Typescript from '../../svg/Typescript';
import useUniverse from './useUniverse';

const Skills: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useUniverse(canvasRef);

  return (
    <Container>
      <canvas ref={canvasRef}></canvas>
      <Header bgDisabled />

      <Logos>
        <div>
          <Html id="html" style={{ color: '#fff' }} />
          <Js id="js" />
          <Css id="css" />
          <Php id="php" />
          <Laravel id="laravel" />
          <ReactSvg id="react" />
          <Typescript id="typescript" />
        </div>
      </Logos>

      <div className="tip">Tente clicar e segurar por um tempo.</div>
    </Container>
  );
};

export default Skills;
