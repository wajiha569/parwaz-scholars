import CommonHero from "../Sections/CommonHero";
import Stories from "../Sections/Stories";
import "./SuccessStories.css";

export default function Programs() {
  const badge = "Success Stories";
  const title = "Inspiring Journeys of Achievement";
  const detail =
    "Meet our remarkable scholars who have transformed their lives through education and are now making a positive impact in their communities and the world.";
  return (
    <main id="main-content">
      <CommonHero badge={badge} title={title} detail={detail} />
      <Stories />
    </main>
  );
}
