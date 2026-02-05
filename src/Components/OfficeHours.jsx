export default function OfficeHours() {
  return (
    <div className="office-hours">
      <h4>
        <i className="fa-regular fa-clock"></i> Office Hours
      </h4>
      {/* FIXED: Style attribute must be an object */}
      <div className="time flex-gap" style={{ textAlign: "right" }}>
        <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.8 }}>
          Monday - Saturday
        </p>
        <h3>9 AM - 6 PM</h3>
      </div>
    </div>
  );
}
