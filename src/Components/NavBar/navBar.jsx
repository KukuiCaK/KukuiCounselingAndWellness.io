import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import LogoImage from '../../assets/LogoST.png';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
      <Link to="/" onClick={closeMenu}>
        <img src={LogoImage} alt="Kukui Logo" className="logo" />
      </Link>
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </li>
          {/*<li>
            <NavLink to="/schedule" onClick={closeMenu}>Schedule</NavLink>  
          </li>*/}
          <li>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </li>
          {/*<li>
            <NavLink to="/resources" onClick={closeMenu}>Resources</NavLink>
          </li>*/}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;