import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route to="/">
          <Home />
        </Route>
        <Route to="/">
          <Starred />
        </Route>
        <div>
          <Route>404 Not found</Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
