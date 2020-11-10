import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface HeadingInterface {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'center' | 'left' | 'right';
}

const Heading: React.FC<HeadingInterface> = ({ children, size, align = 'left' }) => {
  return <h1 className={cn(s.root, s[size], s[align])}>{children}</h1>;
};
export default Heading;
