import CommonHeader from "../Components/CommonHeader";
import "./CoreValues.css";
export default function CoreValues() {
  const sectionBadge = "Core Values";
  const sectionTitle = "Our Guiding Principles";
  const sectionDescription =
    "The values that define our mission and guide every student's flight path.";
  return (
    <section className="values-section introduction">
      <div className="introduction-container">
        <CommonHeader
          sectionBadge={sectionBadge}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />

        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon-wrapper">
              <div className="lucide-container">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
            <h4>Compassion</h4>
            <p>
              Supporting every student's unique journey with empathy and
              understanding.
            </p>
            <div className="card-footer-line"></div>
          </div>

          <div className="value-item">
            <div className="value-icon-wrapper">
              <div className="lucide-container">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
            </div>
            <h4>Integrity</h4>
            <p>
              Operating with transparency and the highest ethical standards in
              all we do.
            </p>
            <div className="card-footer-line"></div>
          </div>

          <div className="value-item">
            <div className="value-icon-wrapper">
              <div className="lucide-container">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
            </div>
            <h4>Innovation</h4>
            <p>
              Constantly evolving our methods to better serve students in a
              changing world.
            </p>
            <div className="card-footer-line"></div>
          </div>

          <div className="value-item">
            <div className="value-icon-wrapper">
              <div className="lucide-container">
                <i className="fa-solid fa-users"></i>
              </div>
            </div>
            <h4>Inclusivity</h4>
            <p>
              Ensuring opportunities are accessible to all, regardless of
              background.
            </p>
            <div className="card-footer-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
