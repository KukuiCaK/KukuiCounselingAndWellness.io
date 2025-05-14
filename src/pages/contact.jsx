import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h2>Contact Us</h2>
          <p>I'm here to help. Reach out to schedule an appointment or learn more about our services.</p>
        </div>
      </section>

      <section className="section contact-info-section">
        <h3 className="section-title">Get In Touch</h3>
        <div className="contact-methods">
          <div className="card contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h4>Phone</h4>
            <p>(808) 862-6644</p>
            <p>Monday-Friday: 9am - 6pm</p>
          </div>
          
          <div className="card contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h4>Email</h4>
            <p>KukuiCounselingandwellness@outlook.com</p>
            <p>We respond within 24 hours</p>
          </div>
        </div>
      </section>

      <section className="section faq-preview">
        <h3 className="section-title">Frequently Asked Questions</h3>
        <div className="faq-container">
          <div className="faq-item">
            <h4>What should I expect during my first appointment?</h4>
            <p>Your first appointment is primarily an assessment session where we'll discuss your concerns, history, and goals. It's an opportunity for me to understand your needs and for you to ask any questions about the therapy process.</p>
          </div>
          
          <div className="faq-item">
            <h4>Do you accept insurance?</h4>
            <p>Yes, we accept most major insurance plans. Please contact our office with your insurance details, and we'll verify your benefits before your first appointment.</p>
          </div>
          
          <div className="faq-item">
            <h4>How long does each therapy session last?</h4>
            <p>Standard therapy sessions are 60 minutes long. Initial assessments may take up to 90 minutes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;