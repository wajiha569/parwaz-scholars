import CommonHero from "../Sections/CommonHero.jsx";
import ContactCont from "../Sections/ContactCont.jsx";
import "./Contact.css";

export default function Contact() {
  const badge = "Contact Us";
  const title = "We're Here to Help";
  const detail =
    "Have questions about our programs, application process, or need support? Our team is ready to assist you on your educational journey.";

  return (
    <main id="main-content">
      <CommonHero badge={badge} title={title} detail={detail} />
      <ContactCont />
    </main>
  );
}
