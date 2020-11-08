import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'allow' | 'primary' | 'danger';
}
const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, type = 'primary' }) => {
  return (
    <button className={cn(s.root, s[type])} type="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
