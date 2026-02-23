export default function UpcomingEvents() {
  const eventsData = [
    {
      category: "Workshop",
      status: "Open Registration",
      title: "Virtual Scholarship Application Workshop",
      description:
        "Learn how to write compelling scholarship essays and prepare a strong application.",
      type: "Online",
      date: "Jan 15, 2025",
      slots: "100 slots",
      registerLink: "#",
    },
    {
      category: "Workshop",
      status: "Open Registration",
      title: "Virtual Scholarship Application Workshop",
      description:
        "Learn how to write compelling scholarship essays and prepare a strong application.",
      type: "Online",
      date: "Jan 15, 2025",
      slots: "100 slots",
      registerLink: "#",
    },
    {
      category: "Workshop",
      status: "Open Registration",
      title: "Virtual Scholarship Application Workshop",
      description:
        "Learn how to write compelling scholarship essays and prepare a strong application.",
      type: "Online",
      date: "Jan 15, 2025",
      slots: "100 slots",
      registerLink: "#",
    },
    {
      category: "Workshop",
      status: "Open Registration",
      title: "Virtual Scholarship Application Workshop",
      description:
        "Learn how to write compelling scholarship essays and prepare a strong application.",
      type: "Online",
      date: "Jan 15, 2025",
      slots: "100 slots",
      registerLink: "#",
    },
  ];
  return (
    <section className="upcoming-events-section">
      <div className="events-header">
        <h2 className="events-main-title">Upcoming Events</h2>
        <p className="events-subtitle">
          Join us for workshops, conferences, and networking opportunities
        </p>
      </div>

      <div className="events-grid">
        {eventsData.map((event) => (
          <article className="event-card">
            <div className="event-top-meta">
              <span className="event-category">{event.category}</span>
              <span className="event-status">{event.status}</span>
            </div>

            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>

            <div className="event-info-grid">
              <div className="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>{event.date}</span>
              </div>
              <div className="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{event.type}</span>
              </div>
              <div className="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>{event.time}</span>
              </div>
              <div className="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>100 slots</span>
              </div>
            </div>

            <a href={event.registerLink} className="event-apply-btn">
              Register Now <i className="fa-solid fa-arrow-right"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
