import React from 'react';
import s from './style.module.scss';
import HeaderMenu from '../header-menu';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <a href="/" className={s.link}>
          <img src="public/img/logo.svg" className={s.logo} />
        </a>
        <HeaderMenu />
      </div>
    </header>
  );
};
export default Header;
