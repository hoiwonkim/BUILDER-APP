// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trade from './pages/Trade';
import SkillExchange from './pages/SkillExchange';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import UserSection from './pages/UserSection';
import NonUserSection from './pages/NonUserSection';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trade" component={Trade} />
        <Route path="/skill-exchange" component={SkillExchange} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/login" component={Login} />
        <Route path="/user-section" component={UserSection} />
        <Route path="/non-user-section" component={NonUserSection} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
