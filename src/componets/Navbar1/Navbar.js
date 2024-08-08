import React, { useState } from "react"
import Logo from "./../../assets/Logo.svg"
import "./Navbar.css"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="little_lemon_logo" className="logo_img" />
      </div>
      <div
        className={`menu-icon ${showMenu ? "cross" : ""}`}
        onClick={toggleMenu}
      >
        {showMenu ? "✕" : "☰"}
      </div>
      <ul className={`nav-list ${showMenu ? "show" : ""}`}>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Menu</a>
        </li>
        <li>
          <a href="/booking">Reservation</a>
        </li>
        <li>
          <a href="/booking">Order Online</a>
        </li>
      
      </ul>
    </nav>
  )
}

export default Navbar
