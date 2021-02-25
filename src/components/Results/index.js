import React from 'react';
import cn from 'classnames';

import classes from './Results.module.scss';

const Results = ({ children, className }) => {
  return <div className={cn(classes.wrapper, className)}>{children}</div>;
};

export default Results;
