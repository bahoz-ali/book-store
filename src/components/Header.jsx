import React from 'react';
import { Link } from 'react-router-dom';
import './header-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <nav className="navigation-section">
        <ul className="nav-list">
          <li>
            <Link to="/" className="link">
              <h1>BOOKSTORE CMS</h1>
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/" className="link">
              Books
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/categories" className="link">
              Categories
            </Link>
          </li>
        </ul>

        <div className="profile">
          <FontAwesomeIcon icon={faUser} style={{color: "var(--clr-primary)"}} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
