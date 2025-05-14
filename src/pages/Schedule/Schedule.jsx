// src/pages/Schedule/Schedule.jsx
import './Schedule.css';

function Schedule() {
  return (
    <div className="schedule-page">
      <section className="schedule-hero">
        <div className="schedule-hero-content">
          <h2>Schedule an Appointment</h2>
        </div>
      </section>

      <section className="section scheduling-section">
        <div className="scheduling-container">
          <div className="scheduling-intro">
            <h3>Easy Online Scheduling</h3>
            <p>Select from available time slots for your appointment.</p>
          </div>
          
          {/* This is where your scheduling widget will be embedded */}
          <div className="scheduling-widget">
            {/* Replace this with your actual scheduling embed code */}
            
          </div>
          
          <div className="scheduling-info">
            <h4>What to Expect</h4>
            <ul>
              <li>Sessions typically last 50-60 minutes</li>
              <li>New clients should arrive 15 minutes early to complete paperwork</li>
              <li>Please provide 24 hours notice for cancellations</li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Schedule;