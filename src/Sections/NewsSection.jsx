import ApplyNowBtn from "../Components/ApplyNowBtn";
export default function NewsSection() {
  const newsData = [
    {
      tag: "News",
      date: "November 28, 2024",
      title: "Record Number of Applications Received for Fall 2024",
      description:
        "We received over 2,000 applications for our fall 2024 scholarship programs, marking a 40% increase from last year.",
    },
    {
      tag: "News",
      date: "November 28, 2024",
      title: "Record Number of Applications Received for Fall 2024",
      description:
        "We received over 2,000 applications for our fall 2024 scholarship programs, marking a 40% increase from last year.",
    },
    {
      tag: "News",
      date: "November 28, 2024",
      title: "Record Number of Applications Received for Fall 2024",
      description:
        "We received over 2,000 applications for our fall 2024 scholarship programs, marking a 40% increase from last year.",
    },
  ];
  return (
    <section className="news-section">
      <div className="news-header">
        <h2 className="main-heading-small">Latest News</h2>
        <p className="below-heading-small">
          Stay updated with announcements, achievements, and developments in our
          organization
        </p>
      </div>

      <div className="news-grid">
        {newsData.map((item) => (
          <article className="news-card">
            <div className="card-image-wrapper">
              <svg
                className="placeholder-icon"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <div className="news-card-content">
              <div className="card-meta">
                <span className="type-tag">{item.tag}</span>
                <span className="date-text">{item.date}</span>
              </div>
              <h3 className="card-heading">{item.title}</h3>
              <p className="card-info">{item.description}</p>
              <ApplyNowBtn />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
