import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface HeadingInterface {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<HeadingInterface> = ({ children, size }) => {
  return <h1 className={cn(s.root, s[size])}>{children}</h1>;
};
export default Heading;
