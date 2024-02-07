import React from "react"
import Button from "../Button/Button"
import Hederimg from "./../../assets/restauranfood.jpg"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="text_container">
          <h1 className="title">Little Lemon</h1>
          <div>
            <h2>London</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <Link to="/booking">
            <Button Lable="Reserve Table" aria-label="On Click" />
          </Link>
        </div>
        <div className="img_container">
          <img className="heder_img" src={Hederimg} alt="Hederimage" />
        </div>
      </div>
    </header>
  )
}

export default Header
