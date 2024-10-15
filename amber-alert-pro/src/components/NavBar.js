import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/report-missing">Report Missing Person</Link></li>
        <li><Link to="/contact-police">Contact Police</Link></li>
        <li><Link to="/view-missing">View Missing Persons</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

