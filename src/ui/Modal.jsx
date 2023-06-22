import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    isModalOpen && document.body.classNameList.remove("modal--open");
    setModalOpen(true);
    document.body.classNameList += " modal--open";
  }

  const contact = (event) => {
    event.preventDefault();
    setLoadingVisible(true);

    emailjs
      .sendForm("service_80ih0if", "template_d9refyl", event.target, "user1")
      .then(() => {
        setLoadingVisible(false);
        setSuccessVisible(true);
      })
      .catch(() => {
        setLoadingVisible(false);
        alert(
          "The contact form service is temporarily unavailable. Please contact us directly at cinematica@email.ca"
        );
      });
  };

  useEffect(() => {
    setLoadingVisible(false);
    setSuccessVisible(false);
  }, []);

  return (
    <div className="modal">
      <div className="modal__contact">
        <i
          className="fas fa-times modal__exit"
          onClick={toggleModal}
          aria-hidden="true"
        ></i>
        <h3 className="modal__title">What can we help you today?</h3>
        <h3 className="modal__subtitle">
          Please fill in the form and we'll get back to you as soon as we can.
        </h3>
        <form action="" id="contact__form" onSubmit={contact}>
          <div className="form__item">
            <label className="form__item form__item--label">Name</label>
            <input type="text" className="input" name="user_name" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input type="email" className="input" name="user_email" required />
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
            Submit
          </button>
        </form>
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
