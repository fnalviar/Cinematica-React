import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceUnavailable from "../exception/ServiceUnavailable";

const Modal = ({ toggleModal }) => {
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [isServiceUnavailable, setServiceUnavailable] = useState(false);

  function contact(event) {
    event.preventDefault();
    setLoadingVisible(true);

    emailjs
      .sendForm("service_80ih0if", "template_d9refyl", event.target, "user1")
      .then(() => {
        setLoadingVisible(false);
        setSuccessVisible(true);
      })
      .catch(() => {
        setTimeout(() => {
          setLoadingVisible(false);
          setServiceUnavailable(true);
        }, 2000);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadingVisible(false);
      setSuccessVisible(false);
    }, 2000);
  }, []);

  return (
    <div className="modal">
      <div className="modal__contact">
        <FontAwesomeIcon
          icon={"times"}
          className="modal__exit"
          onClick={toggleModal}
          aria-hidden="true"
        />

        {!isServiceUnavailable && (
          <>
            <h3 className="modal__title">What can we help you today?</h3>
            <h3 className="modal__subtitle">
              Please fill in the form and we'll get back to you as soon as we
              can.
            </h3>
          </>
        )}

        {isServiceUnavailable ? (
          <ServiceUnavailable />
        ) : (
          <form action="" id="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label className="form__item form__item--label">Name</label>
              <input type="text" className="input" name="user_name" required />
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input
                type="email"
                className="input"
                name="user_email"
                required
              />
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                className="input"
                name="message"
                type="text"
                required
              ></textarea>
            </div>

            <button id="contact__submit" className="form__submit">
              {loadingVisible ? <FontAwesomeIcon icon={"spinner"} /> : "Submit"}
            </button>
          </form>
        )}
        <div className="modal__overlay modal__overlay--loading">
          <i className="fas fa-spinner" aria-hidden="true"></i>
        </div>
        <div className="modal__overlay modal__overlay--success">
          "Thanks for the message! We'll get back to you as soon as we can"
        </div>
      </div>
    </div>
  );
};

export default Modal;
