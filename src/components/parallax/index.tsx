import React, { useEffect, useState } from 'react';
import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/Pokeball2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

import s from './style.module.scss';

const Parallax = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseHandler = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', mouseHandler);
    return () => {
      window.removeEventListener('mousemove', mouseHandler);
    };
  }, []);
  return (
    <div className={s.root}>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${pos.x * 0.05}px, ${pos.y * 0.05}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${pos.x * 0.04}px, ${pos.y * 0.04}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${pos.x * 0.03}px, ${pos.y * 0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${pos.x * 0.02}px, ${pos.y * 0.02}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${pos.x * 0.01}px, ${pos.y * 0.01}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
