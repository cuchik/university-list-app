import React from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

const Button = ({ className, children, ...other }) => {
  return (
    // eslint-disable-next-line
    <button {...other}  className={cn(classes.wrapper, className)}>
      {children}
    </button>
  );
};

export default Button;
