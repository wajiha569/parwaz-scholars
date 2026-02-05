import "./CommonHero.css";

export default function CommonHero({ badge, title, detail }) {
  return (
    <section className="about-hero">
      <div className="hero-content">
        <span className="badge-outline">{badge}</span>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{detail}</p>
      </div>
    </section>
  );
}
