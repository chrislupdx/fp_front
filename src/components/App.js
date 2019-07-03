import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../components/Home';
import LinkById from '../containers/LinkByIdContainer';
import { P } from '../styles';

export default function App() {
  return (
    <Router>
      <Link to="/"><P>Home</P></Link>
      <Switch>
        <Route path="/:id" component={LinkById} />
        <Route exact path ="/" component ={Home} />
      </Switch>
    </Router>
  );
}
