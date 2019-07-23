import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import NewErr from '../containers/NewErr';

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        {/* <Route exact path="/" component={} /> */}
        <Route exact path="/newErr" component={NewErr} />
      </Switch>

    </Router>
  );
}
  
