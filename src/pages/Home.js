import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo_a from "../images/logomayar.png";

import "aos/dist/aos.css";
import Aos from "aos";

import CarouselHome from "../components/CarouselHome";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home">
      <div className="parallax">
        <section data-aos="fade-down" className="sect1home">
          <div>
            <h1>BIENVENUE À Mayar Golden Gym</h1>
            <div className="front-img">
              <img src={logo_a} alt="log mayar"></img>
            </div>
            <h3> Salle de sport et de Fitness </h3>
            <div className="btn-sect1">
              <NavLink className="btn_Club" to="/espace-musculation">
                Club
              </NavLink>
              <NavLink className="btn-contact" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
