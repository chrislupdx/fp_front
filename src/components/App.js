import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../components/Home';


export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path ="/" component ={Home} />
      </Switch>
    </Router>
  );
}
