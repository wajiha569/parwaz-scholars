import Form from "../Components/Form.jsx";
import Email from "../Components/Email.jsx";
import Phone from "../Components/Phone.jsx";
import Location from "../Components/Location.jsx";
import OfficeHours from "../Components/OfficeHours.jsx";
export default function ContactCont() {
  return (
    <section className="contact-container">
      <div className="contact-info-side">
        <Email />
        <Phone />
        <Location />
        <OfficeHours />
      </div>
      <Form />
    </section>
  );
}
