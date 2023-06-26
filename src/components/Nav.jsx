import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Cinematica_logo.png";
import MenuBackDrop from "../components/ui/MenuBackDrop";
import Modal from "../components/ui/Modal";

const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!isModalOpen);
    document.body.classList.toggle("modal--open");
  }

  function openMenu() {
    document.body.classList += " menu--open";
  }

  return (
    <div className="nav">
      <nav>
        <figure className="logo__container">
          <Link to="/home">
            <img src={logo} alt="Logo" className="film-logo" />
          </Link>
          <Link to="/home">
            <h2 className="company-name">Cinematica</h2>
          </Link>
        </figure>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/home" className="nav__link--anchor">
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
              to="/home"
              className="btn nav__link--anchor nav__link--primary"
              onClick={toggleModal}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>

        <MenuBackDrop toggleModal={toggleModal} />
      </nav>

      <Modal toggleModal={toggleModal} />
    </div>
  );
};

export default Nav;
