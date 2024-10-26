// Navbar.jsx
import React from 'react';
// import { Link } from 'react-router-dom'; // Or any routing library you are using
import '../css/NavBar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className='logo' alt='logo' src="/logo.svg" /> FileFerry</div>
    </nav>
  );
};

export default Navbar;
