// frontend/src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Font Awesome 아이콘 사용

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to the Builder App</h1>
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/trade">Trade</Link></li>
          <li><Link to="/skill-exchange">Skill Exchange</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <main className="main">
        <section className="intro-section">
          <h2>About Our App</h2>
          <p>
            The Builder App is a comprehensive platform designed for builders and construction professionals to connect, trade, and collaborate. Whether you're looking to exchange tools, share skills, or find job opportunities, our app provides a seamless and secure environment to meet all your needs.
          </p>
          <p>
            Imagine a marketplace where you can easily find the tools you need for your next project, trade unused equipment with others, or even offer your skills to help a fellow builder. With Builder App, all this is possible and more.
          </p>
          <p>
            Our mission is to create a community where builders can support each other, reduce costs, and improve efficiency by leveraging shared resources and expertise. Join us today and become part of a growing network of professionals dedicated to building a better future.
          </p>
        </section>
        <section className="features-section">
          <h2>Features</h2>
          <ul>
            <li><i className="fas fa-exchange-alt"></i> Easy item trading: Swap tools and equipment with ease.</li>
            <li><i className="fas fa-users"></i> Skill exchange with local professionals: Learn from and collaborate with experts in your area.</li>
            <li><i className="fas fa-briefcase"></i> Job listings and applications: Find and apply for jobs in the construction industry.</li>
            <li><i className="fas fa-user-lock"></i> Secure login and user management: Your data and interactions are safe with us.</li>
          </ul>
        </section>
        <section className="cta-section">
          <h2>Get Started</h2>
          <p><Link to="/login">Sign in</Link> or <Link to="/register">Register</Link> to start using the app.</p>
        </section>
        <div className="cards-container">
          <Link to="/trade" className="card">
            <i className="fas fa-hammer"></i>
            <h3>Trade</h3>
            <p>Trade items with others.</p>
          </Link>
          <Link to="/skill-exchange" className="card">
            <i className="fas fa-hands-helping"></i>
            <h3>Skill Exchange</h3>
            <p>Exchange skills with professionals.</p>
          </Link>
          <Link to="/jobs" className="card">
            <i className="fas fa-briefcase"></i>
            <h3>Jobs</h3>
            <p>Find job listings.</p>
          </Link>
          <Link to="/login" className="card">
            <i className="fas fa-sign-in-alt"></i>
            <h3>Login</h3>
            <p>Sign in to your account.</p>
          </Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Builder App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

