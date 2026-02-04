import ApplyNowBtn from "../Components/ApplyNowBtn";
const groupUrl = "https://chat.whatsapp.com/EP64l7tejlj7AfXuJczgmQ";
export default function ApplyHero() {
  return (
    <section className="apply-hero">
      <div className="apply-container">
        <div className="apply-card">
          <img
            src="../../public/entry-test.png"
            alt="Entry Test"
            className="card-img"
          />
          <h2>Apply for Entry Test</h2>
          <p>
            Ready to prove your skills? Register now for our entry test and take
            the first step toward your journey.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfH1sy60dDIyXJxIOjsir7m0ilp8BTvDT3eOgOfJ4QInXvLRw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ApplyNowBtn />
          </a>
        </div>

        <div className="apply-card">
          <img
            src="../../public/social.png"
            alt="Join Group"
            className="card-img"
          />
          <h2>Join Our Group</h2>
          <p>
            Connect with peers, share resources, and stay updated by joining our
            exclusive student community.
          </p>
          <a href={groupUrl} target="_blank" rel="noopener noreferrer">
            <button className="apply-now secondary">Join Group</button>
          </a>
        </div>
      </div>
    </section>
  );
}
