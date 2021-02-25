import * as React from 'react';
import PublicLayoutWrapper from 'src/components/PublicLayoutWrapper';
import styles from './style.module.scss';

const AuthLayout = ({ component: Component, ...otherProps }) => {
  return (
    <PublicLayoutWrapper className={styles.container}>
      <div className={styles.authCard}>
        <Component {...otherProps} />
      </div>
    </PublicLayoutWrapper>
  );
};

export default AuthLayout;
