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
      </div>
    </section>
  );
}
