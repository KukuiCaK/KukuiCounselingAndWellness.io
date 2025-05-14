import { Link } from 'react-router-dom';
import './Footer.css';
import LogoImage from '../../assets/LogoST.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-section">
          <div className="footer-logo-container">
            <img src={LogoImage} alt="Kukui Logo" className="footer-logo" />
          </div>
          <h4>Kukui Counseling and Wellness</h4>
          <p>Reach out and take that first step toward a brighter tomorrow.</p>
          {/*<div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
           </div>*/}
        </div>
        
        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/*<li><Link to="/schedule">Schedule</Link></li>*/}
            <li><Link to="/contact">Contact</Link></li>
            {/*<li><Link to="/resources">Resources</Link></li>*/}
            {/*<li><Link to="/faq">FAQ</Link></li>*/}
          </ul>
        </div>
        
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            
            <li>
              <i className="fas fa-phone"></i>
              <span>(808) 862-6644</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>KukuiCounselingandwellness@outlook.com</span>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>Mon-Fri: 9am - 6pm</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Kukui Counseling and Wellness LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;