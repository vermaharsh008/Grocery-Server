import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CookieContext } from '../utils/context';

import PrivateRoute from '../components/PrivateRoute';

import SignIn from './Signin';
import Main from './Main';

export default function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['user']);
  console.log(cookie);

  return (
    <CookieContext.Provider value={{ cookie, setCookie, removeCookie }}>
      <Switch>
        <Route exact path="/(index||signin)/">
          {cookie.user ? <Redirect to="/main" /> : <SignIn />}
        </Route>

        <PrivateRoute path="/main" component={Main} />

        <PrivateRoute path="/user/:id?" component={Main} />
      </Switch>
    </CookieContext.Provider>
  );
}
