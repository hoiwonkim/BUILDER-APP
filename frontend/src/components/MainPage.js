// frontend\src\components\MainPage.js

import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h2>Main Page</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trade">Trade</Link></li>
          <li><Link to="/skill-exchange">Skill Exchange</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MainPage;
