import React from "react";
import logo from "../assets/Cinematica_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div className="landing">
      <nav>
        <figure className="logo__container">
          <img src={logo} alt="Logo" className="film-logo" />
          <h2 className="company-name">Cinematica</h2>
        </figure>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
              Search
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="btn nav__link--anchor nav__link--primary">
              Contact Us
            </Link>
          </li>
          <button className="">
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
