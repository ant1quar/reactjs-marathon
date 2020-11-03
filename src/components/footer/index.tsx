import React from 'react';
import cn from 'classnames';
import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={cn('wrapper', s.footerWrapper)}>
        <span>Make with ❤</span>
        <a href="/terms" className={cn(['text-link'])}>
          Our terms
        </a>
      </div>
    </footer>
  );
};
export default Footer;
