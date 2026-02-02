import "./MissionVision.css";
export default function MissionVision() {
  const array = [
    {
      head: "Our Mission",
      class: "icon-box purple",
      smlClass: "fa-solid fa-bullseye",
      detail:
        "To identify and nurture exceptional students by providing comprehensive scholarships and mentorship that enables them to become leaders who impact their communities.",
    },
    {
      head: "Our Vision",
      class: "icon-box blue",
      smlClass: "fa-solid fa-earth-americas",
      detail:
        "A world where every deserving student has access to quality higher education, serving as a catalyst for positive social change and global development.",
    },
  ];

  return (
    <section className="mission-vision">
      <div className="container-wide">
        <div className="split-cards">
          {array.map((item) => (
            <div className="mv-card mission">
              <div className="card-inner">
                <div className={item.class}>
                  <i className={item.smlClass}></i>
                </div>
                <h3>{item.head}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
