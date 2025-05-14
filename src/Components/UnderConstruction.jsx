// src/components/UnderConstruction/UnderConstruction.jsx
import './UnderConstruction.css';

function UnderConstruction({ title = "Page Under Construction" }) {
  return (
    <div className="under-construction">
      <div className="construction-icon">
        <i className="fas fa-hard-hat"></i>
      </div>
      <h2>{title}</h2>
      <p>We're currently working on this page. Please dont check back soon!</p>
      <div className="construction-details">
        <p>nothing.</p>
      </div>
    </div>
  );
}

export default UnderConstruction;