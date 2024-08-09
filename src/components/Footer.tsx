import React from "react";
import "./Footer.css";
import LogoBN from "../assets/logo-bn.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <div className="footer-logo">
          <img src={LogoBN} alt="Universo Fono" />{" "}
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">#UniversoFono</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="footer-column">
        <h3 className="footer-subtitle">Aviso de privacidad</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <a href="mailto:hola@universofono.com.mx">
            Escríbenos hola@universofono.com.mx
          </a>
        </p>
        <p>
          <a href="tel:0000000000">Llámanos 000 000 000 000</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
