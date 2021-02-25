import React from 'react';
import cn from 'classnames';

import classes from './Input.module.scss';

const Input = ({ className, error, ...other }) => {
  return (
    <input
      {...other}
      className={cn(
        classes.wrapper,
        {
          [classes.error]: !!error,
        },
        className
      )}
    />
  );
};

export default Input;
