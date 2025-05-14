// src/pages/Home/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';
import LogoImage from '../../assets/Logo.png';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Kukui</h2>
          <p>To a space dedicated to your journey toward clarity, empowerment, and lasting resilience.</p>
          <p className="hero-description">
            I invite you to explore the possibilities of feeling empowered, even in the face of hardships. Let's work together to conquer fears, embrace your unique strengths, and take meaningful steps toward a more fulfilling and joyful life.
            Remember, you are not alone in this journey—I'm here, ready to walk this path with you, turning challenges into stepping stones on your way to growth and happiness.
          </p>
          <div className="hero-buttons">
            {/*<Link to="/schedule" className="btn btn-primary">Schedule an Appointment</Link>*/}
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image"><img src={LogoImage} alt="Kukui Logo"/></div>
        </div>
      </section>

      <section className="section why-choose-us">
        <h3 className="section-title">Why Choose Kukui</h3>
        <div className="cards-container">
          <div className="card feature-card">
            <div className="card-icon">🌱</div>
            <h4>Holistic Approach</h4>
            <p>We address mental, emotional, and physical wellness as interconnected aspects of your health.</p>
          </div>
          <div className="card feature-card">
            <div className="card-icon">🤝</div>
            <h4>Personalized Care</h4>
            <p>Treatment plans are tailored to your unique needs, goals, and personal circumstances.</p>
          </div>
          <div className="card feature-card">
            <div className="card-icon">🔍</div>
            <h4>Evidence-Based</h4>
            <p>Our therapeutic approaches are grounded in research and proven clinical effectiveness.</p>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <h3 className="section-title">Our Services</h3>
        <div className="cards-container">
          <div className="card service-card">
            <h4>Individual Therapy</h4>
            <p>One-on-one sessions focused on your personal growth and mental wellness.</p>
          </div>

          <div className="card service-card">
            <h4>Couples Counseling</h4>
            <p>Build stronger relationships through improved communication and understanding.</p>
          </div>

          <div className="card service-card">
            <h4>Family Therapy</h4>
            <p>Resolve conflicts and strengthen family bonds in a supportive environment.</p>
          </div>

        </div>
        
      </section>

      <section className="section testimonials">
        <h3 className="section-title">What Our Clients Say</h3>
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <p className="testimonial-text">"Working with Kukui has been transformative. I've developed skills to manage anxiety and build healthier relationships."</p>
            <p className="testimonial-author">- M.K.</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The couples therapy sessions helped us rebuild trust and communicate more effectively. We're grateful for the guidance."</p>
            <p className="testimonial-author">- J.L. & S.L.</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"I appreciate the holistic approach that addresses not just symptoms but overall wellness. I feel more balanced and resilient."</p>
            <p className="testimonial-author">- T.N.</p>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h3>Ready to Begin Your Journey?</h3>
          <p>Take the first step toward wellness today. Schedule a free 15-minute consultation to discuss how we can help.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
