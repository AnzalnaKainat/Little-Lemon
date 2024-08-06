import React from "react";
import RestorantPic from "./../../assets/restaurant.jpg";
import "./Footer.css";

const doormatNavigation = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
];
const contact = ["Address", "Phone Number", "Email"];
const socialMedia = ["Facebook", "Instagram", "Twitter", "YouTube"];

const FooterItems = ({ sectionName, sectionList }) => (
  <div className="footer-items">
    <h2 className="footer-item-title">{sectionName}</h2>
    <ul className="footer-item-names">
      {sectionList.map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="footer-section">
    <div
      className="footer-image-box"
      style={{ backgroundImage: `url(${RestorantPic})` }}
    />
    <div className="footer-content">
      <FooterItems sectionName="Doormat Navigation" sectionList={doormatNavigation} />
      <FooterItems sectionName="Contact" sectionList={contact} />
      <FooterItems sectionName="Social Media" sectionList={socialMedia} />
    </div>
  </footer>
);

export default Footer;
