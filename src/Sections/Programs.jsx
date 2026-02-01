import CommonHeader from "../Components/CommonHeader";
import ProgramsGrid from "../Components/ProgramsGrid";
import "./Programs.css";

export default function Programs() {
  const sectionBadge = "Academic Excellence";
  const sectionTitle = "Our Specialized Programs";
  const sectionDescription =
    "Comprehensive support and mentorship tracks designed to help you unlock your true potential and achieve academic excellence.";
  return (
    <section className="programs-section">
      <div className="programs-container">
        <CommonHeader
          sectionBadge={sectionBadge}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />

        <ProgramsGrid />
      </div>
    </section>
  );
}
