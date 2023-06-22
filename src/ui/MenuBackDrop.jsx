import React from "react";
import { Link } from "react-router-dom";

const MenuBackDrop = ({ toggleModal }) => {
  function closeMenu() {
    document.body.classList.remove("menu__open");
  }

  return (
    <div className="menu__backdrop__container">
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/search" className="menu__link" onClick={closeMenu}>
              Search
            </Link>
          </li>
          <li className="menu__list">
            <Link
              to="/"
              className="menu__link"
              onClick={() => {
                closeMenu();
                toggleModal();
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBackDrop;
