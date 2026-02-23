export default function StoriesCard() {
  const studentMetaData = [
    {
      category: "Computer Science",
      name: "Mudassir",
      university: "GIKI, Pakistan",
      location: "Khyber Pakhtunkhwa",
      degree: "Bachelors Degree",
    },
    {
      category: "Electrical Engineering",
      name: "Nargis Batool",
      university: "GIKI, Pakistan",
      location: "Khyber Pakhtunkhwa",
      degree: "Bachelors Degree",
    },
    {
      category: "Computer Science",
      name: "Muzafar",
      university: "NUST, Islamabad",
      location: "Islamabad, Pakistan",
      degree: "Bachelors Degree",
    },
  ];
  return (
    <div className="stories-grid">
      {studentMetaData.map((student) => (
        <article className="scholar-card">
          <div className="card-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="cap"
              aria-hidden="true"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
          </div>
          <div className="card-content">
            <div className="card-meta">
              <span className="category-tag">Computer Science</span>
            </div>
            <h4 className="name">{student.name}</h4>
            <p className="university-name">{student.university}</p>

            <div className="info-list">
              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>{student.location}</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>{student.degree}</span>
              </div>
            </div>

            <a href="#" className="read-more">
              Read Full Story <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
