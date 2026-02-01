import "./CommonHeader.css";

export default function CommonHeader({
  sectionBadge,
  sectionTitle,
  sectionDescription,
}) {
  return (
    <div className="section-header">
      <span className="section-badge">{sectionBadge}</span>
      <h2 className="section-title">{sectionTitle}</h2>
      <p className="section-description">{sectionDescription}</p>
    </div>
  );
}
