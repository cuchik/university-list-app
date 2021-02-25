import React from 'react';
import cx from 'classnames';
import classes from './PublicLayoutWrapper.module.scss';

const PublicLayoutWrapper = ({ className, children }) => {
  return <div className={cx(classes.wrapper, className)}>{children}</div>;
};

export default PublicLayoutWrapper;
