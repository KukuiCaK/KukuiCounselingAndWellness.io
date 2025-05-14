import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import UnderConstruction from './Components/UnderConstruction';
import Schedule from './pages/Schedule/Schedule';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      link.crossOrigin = 'anonymous';
      link.referrerPolicy = 'no-referrer';
      document.head.appendChild(link);

      return () => {
        const linkToRemove = document.querySelector('link[href*="font-awesome"]');
        if (linkToRemove) document.head.removeChild(linkToRemove);
      };
    }
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <header className="header">
        <h1 className="header-title">Kukui Counseling and Wellness</h1>
        <p className="header-description">Your journey to mental wellness starts here.</p>
      </header>
      
      <NavBar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<UnderConstruction title="Our Services" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} /> 
          <Route path="/privacy" element={<UnderConstruction title="Privacy Policy" />} />
          <Route path="/faq" element={<UnderConstruction title="Frequently Asked Questions" />} />
          <Route path="/resources" element={<UnderConstruction title="Resources" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;