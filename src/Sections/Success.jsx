import CommonHeader from "../Components/CommonHeader";
import ReadStoriesBtn from "../Components/ReadStoriesBtn";
import "./Success.css";

export default function Programs() {
  const sectionBadge = "Impact";
  const sectionTitle = "Success Stories";
  const sectionDescription =
    "Hear from our scholars who are breaking barriers and making a difference in the world.";
  const successCard = [
    {
      quote:
        "Parwaaz Scholars transformed my life. The mentorship I received was the bridge between my local context and a world-class education at MIT.",
      name: "Sarah Ahmed",
      meta: "Computer Science, MIT",
      id: 2,
    },
    {
      quote:
        "The scholarship didn't just cover my fees; it gave me a community of dreamers and leaders who pushed me to soar higher than I ever thought possible.",
      name: "Ali Hassan",
      meta: "Engineering, Oxford University",
      id: 1,
    },
  ];
  return (
    <section className="success-stories-section">
      <div className="container">
        <CommonHeader
          sectionBadge={sectionBadge}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />

        <div className="stories-grid">
          {successCard.map((item) => (
            <div className="story-card" key={item.id}>
              <div className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="scholar-quote">{item.quote}</p>
              <div className="scholar-profile">
                <div className="scholar-avatar">
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
                <div className="scholar-info">
                  <h4 className="scholar-name">{item.name}</h4>
                  <p className="scholar-meta">{item.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stories-footer">
          <ReadStoriesBtn />
        </div>
      </div>
    </section>
  );
}
