import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { CookieContext } from '../utils/context';

export default function PrivateRoute({ component, path }) {
  const { cookie } = useContext(CookieContext);

  return cookie.user ? <Route exact path={path} component={component} /> : <Redirect to="/signin" />;
}

PrivateRoute.propTypes = {
  component: propTypes.any.isRequired,
  path: propTypes.string.isRequired,
};
