import CommonHero from "../Sections/CommonHero.jsx";
import MissionVision from "../Sections/MissionVision.jsx";
import TimeLine from "../Sections/TimeLine.jsx";
import Impact from "../Sections/Impact.jsx";
import "./MainPage.css";
import CoreValues from "../Sections/CoreValues.jsx";
export default function MainPage() {
  const badge = "Our Story";
  const title = (
    <>
      Empowering Dreams <br />
      <span className="text-gradient">Through Education</span>
    </>
  );
  const detail = (
    <>
      Founded in 2023, Parwaaz Scholars is a mission-driven non-profit dedicated
      to unlocking the potential of exceptional students. "Parwaaz" means{" "}
      <strong>flight</strong>—symbolizing our commitment to helping students
      soar above financial barriers.
    </>
  );
  return (
    <main id="main-content">
      <CommonHero badge={badge} title={title} detail={detail} />
      <MissionVision />
      <CoreValues />
      <TimeLine />
      <Impact />
    </main>
  );
}
