import "./CommonHero.css";
export default function CommonHero() {
  return (
    <section className="about-hero">
      <div className="hero-content">
        <span className="badge-outline">Our Story</span>
        <h1 className="hero-title">
          Empowering Dreams <br />
          <span className="text-gradient">Through Education</span>
        </h1>
        <p className="hero-description">
          Founded in 2023, Parwaaz Scholars is a mission-driven non-profit
          dedicated to unlocking the potential of exceptional students.
          "Parwaaz" means <strong>flight</strong>—symbolizing our commitment to
          helping students soar above financial barriers.
        </p>
      </div>
    </section>
  );
}
