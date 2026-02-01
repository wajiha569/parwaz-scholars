import ApplyNowBtn from "../Components/ApplyNowBtn";
import ExploreProgramsBtn from "../Components/ExploreProgramsBtn";
import "./Hero.css";
export default function Hero({ badgeTitle, heroText, heroTitle }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          {badgeTitle}
        </div>

        <h1 className="hero-main-title">{heroTitle}</h1>

        <p className="hero-sub-title">{heroText}</p>

        <div className="hero-buttons">
          <ApplyNowBtn />
          <ExploreProgramsBtn />
        </div>
      </div>

      <div className="hero-bg-glow"></div>
    </section>
  );
}
