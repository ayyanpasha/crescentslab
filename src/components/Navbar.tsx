import React from 'react';
const logo = require('../asset/images/logo.png'); // Updated logo path

// Define the props type
interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`} style={{ height: '80px' }}> {/* Increased navbar height */}
      <div className="logo">
        <span style={{ fontSize: '28px', color: 'white', paddingLeft: '15px', fontFamily: 'Georgia, serif' }}>Crescents Lab</span> {/* Company name displayed with left padding and improved font */}
      </div>
      <div className="menu" onClick={toggleMenu}>
        <i className="fas fa-bars" style={{ color: 'white', fontSize: '32px' }}></i> {/* Increased icon size */}
      </div>
    </nav>
  );
};

export default Navbar; 