import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UsernameContext } from './contexts/UsernameContext';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Login from './pages/Login';

export const Pages = () => {
  // we use React to call useContext to be able to mock it
  const { username } = React.useContext(UsernameContext);

  return (
    <Switch>
      <Route exact path="/">
        {username
          ? <Home />
          : <Redirect to="/login" />
        }
      </Route>
      <Route path="/repositories">
        {username
          ? <Repositories />
          : <Redirect to="/login" />
        }
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

