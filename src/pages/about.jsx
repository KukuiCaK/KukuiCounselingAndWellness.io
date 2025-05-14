import { Link } from 'react-router-dom';
import './About.css';
import SarahP from './../assets/SarahPic.jpg'; 

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h2>About Kukui</h2>
          <p>Dedicated to nurturing mental wellness through compassionate care and evidence-based practices.</p>
        </div>
      </section>

      <section className="section our-story">
        <h3 className="section-title">My Story</h3>
        <div className="story-content">
          <div className="story-image-container">
            <img src={SarahP} alt="Sarah's Profile" className="story-image" />
          </div>
          <div className="story-text">
            <p>Life can feel overwhelming at times, and the path forward may seem unclear—but it's important to remember that you don't have to face these struggles alone. I've been through my own challenges and understand how daunting it can be to overcome personal hurdles. My own experiences have taught me the strength that can be found in vulnerability, and now, I'm here to help guide you through your journey.</p>
            <p>I invite you to explore the possibilities of feeling empowered, even in the face of hardships. Let's work together to conquer fears, embrace your unique strengths, and take meaningful steps toward a more fulfilling and joyful life. Remember, you are not alone in this journey—I'm here, ready to walk this path with you, turning challenges into stepping stones on your way to growth and happiness.</p>
            <p>Reach out and take that first step toward a brighter tomorrow. <em>Together</em>, we can transform difficulties into opportunities for growth and make strides toward the life you envision. Let's embark on this empowering journey—hand in hand, every step of the way.</p>
          </div>
        </div>
      </section>

      <section className="section our-mission">
        <div className="mission-content">
          <div className="mission-text">
            <h3>My Mission</h3>
            <p>My mission is to help you discover the strength within yourself to overcome the obstacles and fears that may be holding you back. Together, we can unravel the complexities of your struggles, creating a path that leads to healing and empowerment. I believe that gaining a sense of clarity and finding your true purpose can be incredibly transformative, equipping you with the tools you need to move forward with confidence.</p>
          </div>
          
          <div className="mission-text">
            <h3>My Values</h3>
            <ul className="values-list">
              <li><span>Compassion</span> - I approach every individual with kindness and understanding.</li>
              <li><span>Empowerment</span> - I will help you find the strength to overcome challenges and thrive.</li>
              <li><span>Integrity</span> - I am committed to honesty and transparency.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <h3 className="section-title">Our Approach</h3>
        <div className="approach-content">
          <div className="card approach-card">
            <div className="card-icon">🧠</div>
            <h4>Cognitive Behavioral Therapy</h4>
            <p>Working together to identify and change negative thought patterns and behaviors that impact your wellbeing.</p>
          </div>
          
          <div className="card approach-card">
            <div className="card-icon">🌿</div>
            <h4>Holistic Wellness</h4>
            <p>Addressing the mind-body connection for complete healing and sustainable mental health practices.</p>
          </div>
          
          <div className="card approach-card">
            <div className="card-icon">👤</div>
            <h4>Person-Centered Care</h4>
            <p>Tailoring treatment to your unique needs, experiences, and goals with compassionate guidance.</p>
          </div>
          
          <div className="card approach-card">
            <div className="card-icon">🌈</div>
            <h4>Strength-Based Focus</h4>
            <p>Highlighting your inherent strengths and resilience to overcome challenges and build confidence.</p>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h3>Ready to Take the First Step?</h3>
          <p>Reach out toward a brighter tomorrow with Kukui Counseling and Wellness.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;