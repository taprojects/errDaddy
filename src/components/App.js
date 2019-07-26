import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NewErr from '../containers/NewErr';
import ErrContainer from '../containers/ErrContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ErrContainer} />
        <Route exact path="/newErr" component={NewErr} />
      </Switch>

    </Router>
  );
}
  
