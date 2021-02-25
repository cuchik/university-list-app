import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import ROUTES from 'src/routes';
import Button from 'src/components/Button';
import { useActions } from './selectorData';
import classes from './Main.module.scss';

const MainLayout = props => {
  const {
    component: Component,
    match,
    history,
    isFullWidth,
    ...otherProps
  } = props;
  const [isHide, setIsHide] = useState(false);
  const { doLogout } = useActions();
  const onLogout = () => {
    doLogout(() => {
      history.push(ROUTES.INDEX());
    });
  };

  return (
    <div
      className={cn(classes.wrapper, {
        [classes.isHideSidebar]: isHide,
      })}
    >
      <div
        className={cn(classes.sideBar, {
          [classes.isHide]: isHide,
        })}
      >
        <Button
          className={classes.actions}
          onClick={() => {
            setIsHide(!isHide);
          }}
        >
          {isHide ? '>' : '<'}
        </Button>
        <div className={classes.sideBarTopContainer}>
          <div className={classes.menus}>
            <ul>
              <li>
                <NavLink to={ROUTES.HOME()} activeClassName={classes.active}>
                  {isHide ? <>&#8461;</> : 'Home'}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.UNIVERSITIES()}
                  activeClassName={classes.active}
                >
                  {isHide ? <>&#9842;</> : 'Universities'}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.MY_UNIVERSITIES()}
                  activeClassName={classes.active}
                >
                  {isHide ? <>&#8499;</> : 'My Universities'}
                </NavLink>
              </li>
            </ul>
          </div>
          <Button onClick={onLogout} type="button" className={classes.logout}>
            {isHide ? <>&#9756;</> : 'Logout'}
          </Button>
        </div>
      </div>
      <div
        className={cn(classes.componentContainer, {
          [classes.fullWidth]: isFullWidth,
        })}
      >
        <Component
          {...{
            ...otherProps,
            match,
          }}
          history={history}
        />
      </div>
    </div>
  );
};

export default MainLayout;
