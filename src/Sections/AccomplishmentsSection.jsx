import { useState } from "react";
import "./AccomplishmentsSection.css";
export default function AccomplishmentsSection() {
  const [statCard, useStatCard] = useState([
    {
      svg: (
        <div className="stat-icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
            <path d="M22 10v6"></path>
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
          </svg>
        </div>
      ),
      number: "500+",
      label: "Students Supported",
      id: 1,
    },
    {
      svg: (
        <div className="stat-icon-wrapper">
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
            className="lucide"
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
        </div>
      ),
      number: "15+",
      label: "Workshops Held",
      id: 2,
    },
    {
      svg: (
        <div className="stat-icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
            <path d="M22 10v6"></path>
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
          </svg>
        </div>
      ),
      number: "20+",
      label: "Partner Institutions",
      id: 3,
    },
  ]);
  return (
    <section className="accomplishments-section">
      <div className="accomplishments-container">
        {statCard.map((item) => (
          <div className="stat-card" key={item.id}>
            {item.svg}
            <div className="stat-info">
              <h2 className="stat-number">{item.number}</h2>
              <p className="stat-label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
