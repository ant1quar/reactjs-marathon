import React from 'react';
import { useHistory } from 'react-router-dom';
import Parallax from '../../components/parallax';
import s from './style.module.scss';
import Heading from '../../components/heading';
import Button from '../../components/button';

const Homepage = () => {
  const history = useHistory();
  return (
    <div className={s.root}>
      <div className={s.textWrapper}>
        <Heading size="h1">
          <strong>Find</strong> all your favorite <strong>Pokemon</strong>
        </Heading>
        <p className={s.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button
          onClick={() => {
            history.push('/pokedex');
          }}
          type="allow">
          See pokemons
        </Button>
      </div>
      <Parallax />
    </div>
  );
};
export default Homepage;
