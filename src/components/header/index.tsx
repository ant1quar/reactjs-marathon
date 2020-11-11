import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import HeaderMenu from '../header-menu';
import Logo from './logo.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={cn('wrapper', s.headerWrapper)}>
        <a href="/" className={s.link}>
          <img src={Logo} alt="logo" className={s.logo} />
        </a>
        <HeaderMenu />
      </div>
    </header>
  );
};
export default Header;
