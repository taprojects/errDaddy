import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from '../containers/NavBar';
import NewErr from '../containers/NewErr';
import ErrContainer from '../containers/ErrContainer';
import DisplayError from '../containers/DisplayError';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default function App() {
  return (
    <Router >
      <NavBar history={history}/>
      <Switch>
        <Route path="/search/:searchTerm" component={ErrContainer} />
        <Route path="/newErr" component={NewErr} />
        <Route path="/displayErr/:errId" component={DisplayError} />
      </Switch>
    </Router>
  );
}
  
