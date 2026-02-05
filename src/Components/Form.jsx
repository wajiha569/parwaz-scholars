export default function Form() {
  return (
    <div className="contact-form-card">
      {/* FIXED: Style attribute must be an object */}
      <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
        Send us a Message
      </h3>
      <form action="#">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" required />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="How can we help?" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
