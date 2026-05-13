import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const contactItems = [
  {
    title: "Email",
    icon: faEnvelope,
    label: "Send us a message",
    value: "contact@avecosmetic.com",
    href: "mailto:contact@avecosmetico.com",
  },
  {
    title: "Phone",
    icon: faPhone,
    label: "Call support",
    value: "+1 (941) AVE™-CUSTOMER",
    href: "tel:+9413921221",
  },
  {
    title: "Home Address",
    icon: faLocationDot,
    label: "Business location",
    value: "North Port - Florida, United States",
    href: null,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="pbContactCardsSection">
      <div className="pbContainer">
        <div className="pbContactCardsGrid">
          {contactItems.map((item) => (
            <article className="pbContactInfoCard" key={item.title} tabIndex={0}>
              <div className="pbContactIcon">
                <FontAwesomeIcon icon={item.icon} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.label}</p>

              <div className="pbContactOverlay">
                <span>{item.title}</span>

                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}