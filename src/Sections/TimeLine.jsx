import CommonHeader from "../Components/CommonHeader";
import "./TimeLine.css";
export default function CoreValues() {
  const sectionBadge = "Our History";
  const sectionTitle = "The Parwaaz Journey";
  const sectionDescription =
    "From a small community group to a big community group.";
  return (
    <section className="timeline-section introduction">
      <div className="introduction-container">
        <CommonHeader
          sectionBadge={sectionBadge}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />

        <div className="timeline-container">
          <div className="timeline-track"></div>

          <div className="timeline-card-wrapper">
            <div className="timeline-marker">
              <i className="fa-solid fa-comments"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="year-badge">2023</span>
                <span className="status-tag">Founding</span>
              </div>
              <h4>The Inception</h4>
              <p>
                Started as "PakHazara", a grassroots initiative via a WhatsApp
                group to support local talent in the Hazara region.
              </p>
            </div>
          </div>

          <div className="timeline-card-wrapper">
            <div className="timeline-marker">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="year-badge">2024</span>
                <span className="status-tag">Growth</span>
              </div>
              <h4>Digital Expansion</h4>
              <p>
                Launched our digital presence and began building a global
                network of mentors to guide students through university
                applications.
              </p>
            </div>
          </div>

          <div className="timeline-card-wrapper active">
            <div className="timeline-marker">
              <i className="fa-solid fa-plane-up"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="year-badge">2025</span>
                <span className="status-tag pulse">Present</span>
              </div>
              <h4>The Flight</h4>
              <p>
                Formalizing as Parwaaz Scholars. Scaling our impact through
                institutional partnerships and a full-scale scholarship portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
