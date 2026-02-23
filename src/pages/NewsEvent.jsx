import CommonHero from "../Sections/CommonHero";
import NewsFeed from "../Sections/NewsFeed";
import NewsSection from "../Sections/NewsSection";
import UpcomingEvents from "../Sections/UpcomingEvents";

import "./NewsEvent.css";
export default function NewsEvent() {
  const badge = "News & Events";
  const title = "Stay Connected with Our Community";
  const detail =
    "Keep up with the latest news, events, and updates from the Parwaaz Scholars community. Discover opportunities to connect, learn, and grow.";
  return (
    <main id="main-content">
      <CommonHero badge={badge} title={title} detail={detail} />
      <NewsFeed />

      <UpcomingEvents />

      <NewsSection />
    </main>
  );
}
