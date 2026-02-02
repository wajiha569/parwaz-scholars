export default function CoreCards() {
  const array = [
    {
      title: "Compassion",
      detail:
        "Supporting every student's unique journey with empathy and understanding.",
      class: "fa-solid fa-heart",
    },
    {
      title: "Integrity",
      detail:
        "Operating with transparency and the highest ethical standards in all we do.",
      class: "fa-solid fa-shield-halved",
    },
    {
      title: "Innovation",
      detail:
        "Constantly evolving our methods to better serve students in a changing world.",
      class: "fa-solid fa-lightbulb",
    },
    {
      title: "Inclusivity",
      detail:
        "Ensuring opportunities are accessible to all, regardless of background.",
      class: "fa-solid fa-users",
    },
  ];
  return (
    <div className="values-grid">
      {array.map((item) => (
        <div className="value-item">
          <div className="value-icon-wrapper">
            <div className="lucide-container">
              <i className={item.class}></i>
            </div>
          </div>
          <h4>{item.head}</h4>
          <p>{item.detail}</p>
          <div className="card-footer-line"></div>
        </div>
      ))}
    </div>
  );
}
