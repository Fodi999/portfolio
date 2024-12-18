import React from "react";
import { AiOutlineMail } from "react-icons/ai"; // Иконка для почты
import { AiFillInstagram } from "react-icons/ai"; // Иконка для Instagram


const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Skontaktuj się ze mną</h2>
      <p className="contact-description">
      Skontaktuj się ze mną poprzez e-mail lub Instagram:
      </p>

      <div className="contact-links">
        {/* Ссылка на почту */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=fodi85999@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <AiOutlineMail className="contact-icon" /> Napisz e-mailem
        </a>

        {/* Ссылка на Instagram */}
        <a
          href="https://www.instagram.com/fodifood/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <AiFillInstagram className="contact-icon" /> Instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;




