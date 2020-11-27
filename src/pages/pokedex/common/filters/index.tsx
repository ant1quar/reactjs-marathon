import React from 'react';
import s from './style.module.scss';

const Filters = ({
  search,
  handleSearchChange,
}: {
  search: string;
  handleSearchChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}) => {
  return (
    <div className={s.root}>
      <input
        type="text"
        className={s.input}
        value={search}
        onChange={handleSearchChange}
        placeholder="Encuentra tu pokémon..."
      />
    </div>
  );
};
export default Filters;
