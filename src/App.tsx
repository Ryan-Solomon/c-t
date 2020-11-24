import React from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Todos from './components/todos/Todos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/counter'>
        <Counter />
      </Route>
      <Route exact path='/todos'>
        <Todos />
      </Route>
    </Router>
  );
}

export default App;
