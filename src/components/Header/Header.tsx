import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';

const Header = () => {
  return <div className={cn(s.header, 'color')}>This is header!</div>;
};
export default Header;
