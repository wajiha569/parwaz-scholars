import GetInTouchBtn from "../Components/GetInTouchBtn";
import StartBtn from "../Components/StartBtn";
import "./Flight.css";
export default function Flight() {
  return (
    <section className="take-flight-section">
      <div className="cta-glow"></div>

      <div className="cta-container">
        <span className="cta-badge">Join the community</span>
        <h2 className="cta-title">
          Ready to Take <span className="text-white">Flight?</span>
        </h2>

        <p className="cta-description">
          Join hundreds of scholars who have transformed their lives through
          education.
          <strong>Your journey starts here.</strong>
        </p>

        <div className="cta-buttons">
          <StartBtn />
          <GetInTouchBtn />
        </div>
      </div>
    </section>
  );
}
