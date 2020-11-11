import React from 'react';
import { A } from 'hookrouter';
import cn from 'classnames';
import s from './style.module.scss';
import HeaderMenu from '../header-menu';
import Logo from './logo.svg';
import { RoutuesList } from '../../models/route';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={cn('wrapper', s.headerWrapper)}>
        <A href={RoutuesList.HOME} className={s.link}>
          <img src={Logo} alt="logo" className={s.logo} />
        </A>
        <HeaderMenu />
      </div>
    </header>
  );
};
export default Header;
