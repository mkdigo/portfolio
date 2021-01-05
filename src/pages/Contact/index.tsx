import React from 'react';
import Header from '../../components/Header';
import profileImage from '../../images/profile.jpg';
import Facebook from '../../svg/Facebook';
import Github from '../../svg/Github';
import Linkedin from '../../svg/Linkedin';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <Header />

      <div className="content">
        <div>
          <img src={profileImage} alt="Profile" />

          <ul>
            <li>
              <span>Nome:</span> Rodrigo Yukio Mukudai
            </li>
            <li>
              <span>Phone:</span> 090-9441-9358
            </li>
            <li>
              <span>Cidade:</span> Takahama-shi
            </li>
            <li>
              <span>Província:</span> Aichi-ken
            </li>
            <li>
              <span>País:</span> Japão
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rodrigomukudai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin height={50} />
          </a>
          <a
            href="https://www.facebook.com/mkdigo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook height={50} />
          </a>
          <a
            href="https://github.com/mkdigo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github height={50} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
