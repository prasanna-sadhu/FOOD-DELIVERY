import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="#" className="logo">Food Services</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
