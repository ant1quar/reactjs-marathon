import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import HeaderMenu from '../header-menu';

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.wrapper)}>
        <a href="/" className={cn(s.link)}>
          <img src="public/img/logo.svg" className={cn(s.logo)} />
        </a>
        <HeaderMenu />
      </div>
    </header>
  );
};
export default Header;
