import "./Impact.css";
export default function CoreValues() {
  const impactStats = [
    {
      id: 1,
      icon: "fa-graduation-cap",
      number: "500+",
      label: "Students Supported",
    },
    {
      id: 2,
      icon: "fa-lightbulb",
      number: "15+",
      label: "Workshops Held",
    },
    {
      id: 3,
      icon: "fa-handshake",
      number: "20+",
      label: "Partner Institutions",
    },
  ];
  return (
    <section className="impact-dashboard">
      <div className="impact-container">
        <div className="impact-grid">
          {impactStats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon-box">
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
              <div className="stat-content">
                {/* Ensure this span exists to give the card its vertical volume */}
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
