import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ROUTES from 'src/routes';
import toast from 'src/helper/toast';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { useData, useActions } from './selectorData';
import classes from './Login.module.scss';

const yupValidate = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = ({ history }) => {
  const formRef = useRef(null);
  const { isLoggingIn, isLoggedIn } = useData();
  const { doLogin } = useActions();
  if (isLoggedIn) {
    return <Redirect to={ROUTES.INDEX()} />;
  }
  const renderForm = formProps => {
    const { handleSubmit, values, handleChange, errors } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <Input
          value={values.username}
          type="text"
          name="username"
          onChange={handleChange}
          error={errors.username}
          placeholder="Username"
        />
        <Input
          value={values.password}
          type="password"
          name="password"
          onChange={handleChange}
          error={errors.password}
          placeholder="Password"
        />
        <div>
          <Button type="submit">Login{!!isLoggingIn && '...'}</Button>
        </div>
      </form>
    );
  };
  return (
    <div className={classes.wrapper}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={yupValidate}
        enableReinitialize
        onSubmit={values => {
          const { username, password } = values;
          if (username === 'admin' && password === 'admin') {
            doLogin(values.username, values.password, response => {
              if (response) {
                history.push(ROUTES.INDEX());
              } else {
                toast.error('Login failed! Please use admin/admin.');
              }
            });
          } else {
            toast.error('Login failed! Please use admin/admin.');
          }
        }}
        innerRef={formRef}
      >
        {fmProps => renderForm(fmProps)}
      </Formik>
    </div>
  );
};

export default Login;
