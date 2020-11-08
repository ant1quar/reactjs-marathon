import React from 'react';
import Layout from '../layout';
import Parallax from '../../components/parallax';

import s from './style.module.scss';

const Homepage = () => {
  return (
    <Layout>
      <div className={s.root}>
        <Parallax />
      </div>
    </Layout>
  );
};
export default Homepage;
