import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './style.module.scss';
import { GLOBAL_ROUTES } from '../../routes';

const HeaderMenu = () => {
  const path = usePath();
  return (
    <nav className={s.menu}>
      {GLOBAL_ROUTES.map(({ link, title }) => (
        <A href={link} key={link} className={link == path ? cn(s.item, s.itemActive) : s.item}>
          <span className={s.text}>{title}</span>
        </A>
      ))}
    </nav>
  );
};
export default HeaderMenu;
