import CommonHero from "../Sections/CommonHero.jsx";
import MissionVision from "../Sections/MissionVision.jsx";
import TimeLine from "../Sections/TimeLine.jsx";
import Impact from "../Sections/Impact.jsx";
import "./MainPage.css";
import CoreValues from "../Sections/CoreValues.jsx";
export default function MainPage() {
  return (
    <main id="main-content">
      <CommonHero />
      <MissionVision />
      <CoreValues />
      <TimeLine />
      <Impact />
    </main>
  );
}
