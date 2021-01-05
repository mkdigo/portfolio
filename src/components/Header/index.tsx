import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../../svg/Menu';

import { Container } from './styles';

interface IProps {
  bgDisabled?: boolean;
}

const Header: React.FC<IProps> = ({ bgDisabled }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<string>('');
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleMenu = (): void => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <Container
      className={mobileMenu ? 'mobile-menu-active' : ''}
      bgDisabled={bgDisabled}
    >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={currentPage === '/skills' ? 'current-page' : ''}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={currentPage === '/projects' ? 'current-page' : ''}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={currentPage === '/about' ? 'current-page' : ''}
            >
              Sobre esse Site
            </Link>
          </li>
          <li>
            <Link
              to="/myhistory"
              className={currentPage === '/myhistory' ? 'current-page' : ''}
            >
              Minha História
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={currentPage === '/contact' ? 'current-page' : ''}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <button className="mobile" onClick={handleMenu}>
        <Menu />
      </button>
    </Container>
  );
};

export default Header;
