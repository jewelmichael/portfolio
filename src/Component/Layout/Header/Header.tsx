import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

function Header() {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <Link to="/" className={s.logo}>Jewel Michael</Link>
          <div className={s.navContainer}>
            <nav className={s.navBlock}>
              <Link to="/" className={s.navItem}>Home</Link>
              <Link to="/about" className={s.navItem}>about</Link>
              <Link to="/works" className={s.navItem}>work</Link>
              <Link to="/contact" className={s.navItem}>contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
