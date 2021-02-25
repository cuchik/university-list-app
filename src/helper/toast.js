/* eslint-disable */
import React from 'react';
import { toast } from 'react-toastify';
import classes from './toast.module.scss';

class Toast {
  error(text) {
    const content = (
      <span className={classes.toastContent}>
         {text}
      </span>
    );
    toast.error(content);
  }

  success(text) {
    const content = (
      <span className={classes.toastContent}>
         {text}
      </span>
    );
    toast.success(content);
  }
}

export default new Toast();
