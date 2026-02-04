import "./ApplyNowBtn.css";
const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfH1sy60dDIyXJxIOjsir7m0ilp8BTvDT3eOgOfJ4QInXvLRw/viewform";
export default function ApplyNowBtn() {
  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Apply Now <i className="fa-solid fa-arrow-right"></i>
    </a>
  );
}
