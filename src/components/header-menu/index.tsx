import React from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import s from './style.module.scss';
import MenuItem from '../../models/menu';

const HeaderMenu = () => {
  const location = useLocation();
  const menu: MenuItem[] = [
    { text: 'Home', link: '/' },
    { text: 'Pokédex', link: '/pokedex' },
    { text: 'Legendaries', link: '/legendaries' },
    { text: 'Documentation', link: '/documentation' },
  ];
  return (
    <nav className={s.menu}>
      {menu.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className={location.pathname == item.link ? cn(s.item, s.itemActive) : s.item}>
          <span className={s.text}>{item.text}</span>
        </Link>
      ))}
    </nav>
  );
};
export default HeaderMenu;
