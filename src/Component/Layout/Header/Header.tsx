import React from 'react';
import s from './Header.module.scss';

function Header() {
  return (
    <div className={s.Header}>
      <div className="container">
        <a href="/home" className={s.logo}>Jewel Michael</a>
        <div className={s.navContainer}>
          <nav className={s.navBlock}>
            <a href="/" className={s.navItem}>Home</a>
            <a href="/about" className={s.navItem}>about</a>
            <a href="/works" className={s.navItem}>work</a>
            <a href="/contact" className={s.navItem}>contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
