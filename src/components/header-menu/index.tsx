import React from 'react';
import s from './style.module.scss';
import MenuItem from '../../models/menu';

const HeaderMenu = () => {
  const menu: MenuItem[] = [
    { text: 'Home', link: 'Home' },
    { text: 'Pokédex', link: '/ookedex' },
    { text: 'Legendaries', link: '/legendaries' },
    { text: 'Documentation', link: '/documentation' },
  ];
  return (
    <nav className={s.menu}>
      {menu.map((item) => (
        <a href={item.link} className={s.item}>
          <span className={s.text}>{item.text}</span>
        </a>
      ))}
    </nav>
  );
};
export default HeaderMenu;
