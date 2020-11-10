import React from 'react';

import s from './style.module.scss';

interface NotFoundInterface {
  title?: string;
}
const NotFound: React.FC<NotFoundInterface> = ({ title }) => {
  return <div className={s.root}>Not found {title}</div>;
};
export default NotFound;
