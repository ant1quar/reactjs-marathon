import React from 'react';
import s from './style.module.scss';

const Heading: React.FC = ({ children }) => {
  return <h1 className={s.root}>{children}</h1>;
};
export default Heading;
