import React from 'react';
import HyperLinkListContainer from '../containers/HyperLinkListContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path ="/" component ={HyperLinkListContainer} />
      </Switch>
    </Router>
  );
}
