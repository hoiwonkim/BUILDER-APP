// frontend/src/pages/UserSection.js

import React from 'react';
import { Link } from 'react-router-dom';

function UserSection() {
  return (
    <div>
      <h2>User Section</h2>
      <p>Welcome to the user section. Here you can access user-specific features.</p>
      <Link to="/main">Go to Main Page</Link>
    </div>
  );
}

export default UserSection;

