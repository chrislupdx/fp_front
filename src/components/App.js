import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../components/Home';
import LinkById from '../containers/LinkByIdContainer';
// import Detail from '../components/Detail';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/:id" component={LinkById} />
        <Route exact path ="/" component ={Home} />
      </Switch>
    </Router>
  );
}
