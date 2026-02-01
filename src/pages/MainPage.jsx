import Hero from "../Sections/Hero.jsx";
import AccomplishmentsSection from "../Sections/AccomplishmentsSection.jsx";
import Programs from "../Sections/Programs.jsx";
import Success from "../Sections/Success.jsx";
import Flight from "../Sections/Flight.jsx";
import "./MainPage.css";
export default function MainPage() {
  const heroText = (
    <>
      Empowering students with <strong>scholarships</strong>
      <strong>mentorship</strong>, and <strong>guidance</strong> to unlock their
      true potential and soar to new heights.
    </>
  );
  const heroTitle = (
    <>
      From Dreams to <span className="text-gradient">Destinies</span>
    </>
  );
  return (
    <main id="main-content">
      <Hero
        badgeTitle="Empowering Future Leaders Since 2022"
        heroTitle={heroTitle}
        heroText={heroText}
      />

      <AccomplishmentsSection />

      <Programs />

      <Success />
      <Flight />
    </main>
  );
}
