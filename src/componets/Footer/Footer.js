import React from "react"
import RestorantPic from "./../../assets/restaurant.jpg"
import "./Footer.css"

const doormatNavigation = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
]
const contact = ["Adress", "phone number", "email"]
const socialMedia = ["Facebook", "Instagram", "Twitter", "Youtube"]

const FooterItems = (props) => {
  return (
    <div className="app__footer-items" id="footer">
      <h1 className="app__footer-item-title">{props.sectionName}</h1>
      <ul className="app__footer-item-names">
        {props.sectionList.map((item) => {
          return (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="app__footer-section">
      <div
        className="app__about-image-box img-box-1"
        style={{
          backgroundImage: `url(${RestorantPic})`,
        }}
      />
      <FooterItems
        sectionName="Doormat Navigation"
        sectionList={doormatNavigation}
      />
      <FooterItems sectionName="Contact" sectionList={contact} />
      <FooterItems sectionName="Social Media" sectionList={socialMedia} />
    </footer>
  )
}

export default Footer
