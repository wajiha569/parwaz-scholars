import CommonHeader from "../Components/CommonHeader";
import StoriesCard from "../Components/StoriesCard";

export default function Stories() {
  const sectionBadge = "Impact";
  const sectionTitle = "Our Scholar's Journeys";
  const sectionDescription =
    "Each story represents a dream realized and a future transformed through the power of education.";
  return (
    <section className="success">
      <div className="success-container">
        <CommonHeader
          sectionBadge={sectionBadge}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />
        <StoriesCard />
      </div>
    </section>
  );
}
