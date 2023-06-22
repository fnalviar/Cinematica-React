import React, { useEffect, useState } from "react";
import logo from "../assets/Cinematica_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../ui/Modal";
import MenuBackDrop from "../ui/MenuBackDrop";

const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    if (isModalOpen) {
      document.body.classList.remove("modal--open");
    }
    setModalOpen(true);
    document.body.classList.add("modal--open");
  }

  function openMenu() {
    document.body.classList += " menu__open";
  }

  return (
    <div id="nav">
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
            <Link to="/search" className="nav__link--anchor">
              Search
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/"
              className="btn nav__link--anchor nav__link--primary"
              onClick={toggleModal}
            >
              Contact Us
            </Link>
          </li>
          <button className="" onClick={openMenu}>
            
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>

        <MenuBackDrop toggleModal={toggleModal} />
      </nav>

      <Modal toggleModal={toggleModal} />
    </div>
  );
};

export default Nav;
