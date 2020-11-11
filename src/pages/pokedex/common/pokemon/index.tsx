import React from 'react';
import cn from 'classnames';
import Heading from '../../../../components/heading';

import s from './style.module.scss';
import { Pokemon } from '../../../../models/pokemon';

interface PokemonCardInterface {
  pokemon: Pokemon;
}
const PokemonCard: React.FC<PokemonCardInterface> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="h5">{pokemon.nameClean}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {pokemon.types.map((t) => (
            <span key={t} className={cn(s.label, s[t])}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
