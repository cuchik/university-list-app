import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import get from 'lodash/get';
import { useSelector, useDispatch } from 'react-redux';

import { getMe } from 'src/store/actions/auth';

import ROUTES from '../routes';
import AuthLayout from '../layouts/Auth';
import Login from './pages/Auth/Login';
import MainLayout from '../layouts/Main';
import Home from './pages/Home';
import Universities from './pages/Universities';
import MyUniversities from './pages/MyUniversities';

let calledMe = 0;

const Views = () => {
  const dispatch = useDispatch();
  const [callMeLoading, setCallMeLoading] = useState(false);
  const isLoggedIn = !!useSelector(state =>
    get(state, 'auth.login.access_token', null)
  );

  useEffect(() => {
    if (isLoggedIn) {
      calledMe = 0;
      // TODO: Get meta data
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const renderAuthenticatedRoutes = () => {
    if (!isLoggedIn) {
      // if not logged in, then redirect to login
      return (
        <Redirect
          to={{
            pathname: ROUTES.LOGIN(),
            state: {
              // Set previous path and search query to support redirect into previous url after did login
              search: window.location.search,
              prevLocation: window.location.pathname,
            },
          }}
        />
      );
    }
    return (
      <Switch>
        <Route
          path={ROUTES.HOME()}
          render={props => <MainLayout component={Home} {...props} />}
        />
        <Route
          path={ROUTES.UNIVERSITIES()}
          render={props => <MainLayout component={Universities} {...props} />}
        />
        <Route
          path={ROUTES.MY_UNIVERSITIES()}
          render={props => <MainLayout component={MyUniversities} {...props} />}
        />
      </Switch>
    );
  };
  if (isLoggedIn && calledMe === 0 && !callMeLoading) {
    // TODO: do get me
    setCallMeLoading(true);
    dispatch(
      getMe(() => {
        calledMe = 1;
        setCallMeLoading(false);
      })
    );
  }
  if (callMeLoading) {
    return (
      <div className="main_first_loading_container">
        {callMeLoading && 'Get current user data Loading...'}
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path={ROUTES.LOGIN()}
            render={props => <AuthLayout component={Login} {...props} />}
          />
          <Route
            exact
            path={ROUTES.INDEX()}
            render={() => (
              <Redirect to={isLoggedIn ? ROUTES.HOME() : ROUTES.LOGIN()} />
            )}
          />
          {renderAuthenticatedRoutes()}
          <Redirect from="*" to={ROUTES.LOGIN()} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Views;
