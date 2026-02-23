export default function NewsFeed() {
  const newsData = [
    {
      tag: "Announcement",
      date: "December 15, 2024",
      title: "Parwaaz Scholars Announces $500K in New Scholarships for 2024",
      excerpt:
        "Expanding our horizons to support more dreams. Discover how this new funding will create pathways for the next generation of leaders.",
      link: "#",
    },
    {
      tag: "Announcement",
      date: "December 15, 2024",
      title: "Parwaaz Scholars Announces $500K in New Scholarships for 2024",
      excerpt:
        "Expanding our horizons to support more dreams. Discover how this new funding will create pathways for the next generation of leaders.",
      link: "#",
    },
    {
      tag: "Announcement",
      date: "December 15, 2024",
      title: "Parwaaz Scholars Announces $500K in New Scholarships for 2024",
      excerpt:
        "Expanding our horizons to support more dreams. Discover how this new funding will create pathways for the next generation of leaders.",
      link: "#",
    },
  ];
  return (
    <section className="news-feed-section">
      <div className="news-grid">
        {newsData.map((news) => (
          <article className="modern-news-card">
            <div className="card-image-box">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
                alt="Scholarship News"
              />
              <span className="floating-tag">{news.tag}</span>
            </div>

            <div className="card-content">
              <span className="card-date">{news.date}</span>
              <h3 className="card-title">{news.title}</h3>
              <p className="card-excerpt">{news.excerpt}</p>
              <div className="card-footer">
                <a href={news.link} className="read-link">
                  Read Full Story <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
