import "./ProgramsGrid.css";
export default function ProgramsGrid() {
  return (
    <div className="programs-grid">
      <div className="program-card">
        <div className="card-tag">Most Popular</div>
        <div className="card-header">
          <div className="card-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h4>College Entry Test</h4>
          <p>
            Guided preparation to ace your university entrance exams with
            confidence.
          </p>
        </div>

        <ul className="card-features">
          <li>
            <div className="feature-icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <span>Exclusive Study Groups</span>
          </li>
          <li>
            <div className="feature-icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <span>Latest News & Notifications</span>
          </li>
          <li>
            <div className="feature-icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <span>Premium Academic Resources</span>
          </li>
        </ul>

        <a href="#" className="card-action">
          Learn More <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
