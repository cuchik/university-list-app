import * as React from 'react';

import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <h2>University List App</h2>
      <h3>List features</h3>
      <ul>
        <li>Login with credential admin/admin</li>
        <li>Search Universities</li>
        <li>View Universities List</li>
        <li>View My Universities List</li>
        <li>Add University to My Universities</li>
        <li>Remove University from My Universities</li>
        <li>Responsive</li>
      </ul>
    </div>
  );
};

export default Home;
