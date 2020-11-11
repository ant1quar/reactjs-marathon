import React from 'react';
import s from './style.module.scss';

const Filters = () => {
  return (
    <div className={s.root}>
      <input type="text" className={s.input} placeholder="Encuentra tu pokémon..." />
    </div>
  );
};
export default Filters;
