// frontend\src\App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trade from './pages/Trade';
import SkillExchange from './pages/SkillExchange';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trade" component={Trade} />
        <Route path="/skill-exchange" component={SkillExchange} />
        <Route path="/jobs" component={Jobs} />
      </Switch>
    </Router>
  );
}

export default App;
