import React, { useEffect } from "react";
import logo from "../assets/Cinematica_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu__open";
    // document.getElementById("menu__backdrop__container").style.display = "block";
  }

  function closeMenu() {
    document.body.classList.remove("menu__open");
    // document.getElementById("menu__backdrop__container").style.display = "none";
  }

  return (
    <div className="landing">
      <nav>
        <figure className="logo__container">
          <Link to="/">
            <img src={logo} alt="Logo" className="film-logo" />
          </Link>
          <Link to="/">
            <h2 className="company-name">Cinematica</h2>
          </Link>
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
          <button className="" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>

        <div className="menu__backdrop__container">
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon="times" aria-hidden="true" />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link className="menu__link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link className="menu__link" onClick={closeMenu}>
                  Search
                </Link>
              </li>
              <li className="menu__list">
                <Link className="menu__link" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
