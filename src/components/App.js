import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../components/Home';
import LinksById from '../containers/LinkByIdContainer';


export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/:id" component={LinksById} />
        <Route exact path ="/" component ={Home} />
      </Switch>
    </Router>
  );
}
