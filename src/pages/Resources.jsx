import "./Resources.css";
import ApplyNowBtn from "../Components/ApplyNowBtn";
export default function Programs() {
  return (
    <main id="main1-content">
      <div className="main-part">
        <h1>Ready to Take the Next Step?</h1>
        <p>
          Join our community and unlock resources that save you time, boost your
          skills, and keep you ahead.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfH1sy60dDIyXJxIOjsir7m0ilp8BTvDT3eOgOfJ4QInXvLRw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ApplyNowBtn />
        </a>
      </div>
    </main>
  );
}
