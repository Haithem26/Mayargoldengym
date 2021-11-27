import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="top-footer">
          <div className="footer-contact">
            <h2>CONTACTEZ NOUS</h2>
            <ul className="contact-list">
              <li className="contact-list-item">
                <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                <span> Avenu Habib Bourguiba Beni Khalled</span>{" "}
              </li>
              <li className="contact-list-item">
                <i className="fa fa-phone-square fa-lg" aria-hidden="true"></i>{" "}
                <span> Tél : +216 95 733 377</span>
              </li>
              <li className="contact-list-item">
                <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>{" "}
                <span>
                  {" "}
                  <Link className="footer-btn-contact" to="/contact">
                    Contact
                  </Link>
                </span>{" "}
              </li>
              <li className="contact-list-item">
                <i
                  className="fa fa-facebook-square fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                <a
                  href=" https://www.facebook.com/MayarGoldenGym24/"
                  target="_blank"
                >
                  <span> Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-time">
            <h2>HORAIRES DE TRAVAIL</h2>
            <ul className="time-list">
              <li className="time-list-item">
                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> Lundi
                <span>08:00 - 21:00</span>
              </li>
              <li className="time-list-item">
                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> Mardi{" "}
                <span>08:00 - 21:00</span>
              </li>
              <li className="time-list-item">
                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>{" "}
                Mercredi <span>08:00 - 21:00</span>
              </li>
              <li className="time-list-item">
                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> Jeudi{" "}
                <span>08:00 - 21:00</span>
              </li>
              <li className="time-list-item">
                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>{" "}
                Vendredi <span>08:00 - 21:00</span>
              </li>
              <li className="time-list-item">
                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>{" "}
                Samedi <span>08:00 - 21:00</span>
              </li>
              <li className="time-list-item">
                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>{" "}
                Dimanche <span>10:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bot-footer">
          <p className="desc-footer">Copyright © 2021 Mayar Golden Gym.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
