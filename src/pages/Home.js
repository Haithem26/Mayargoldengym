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
      <div className="parallax2">
        <section data-aos="fade-down" className="secthome">
          <h1>BIENVENUE À Mayar Golden Gym</h1>
          <div className="img-home">
            <img src={logo_a} alt="logo mayar"></img>
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
        </section>
        <section className="secTarifs">
          <div data-aos="fade-right" className="sectTarifContainer">
            <h2>Consulter Nos tarifs</h2>
            <NavLink className="btn-tarif" to="/tarifs">
              Nos Tarifs
            </NavLink>
          </div>
        </section>
        <section className="sect3">
          <div data-aos="fade-right" className="sect3Content">
            <h1>Qui sommes Nous ?</h1>
            <div className="descirption">
              <p>
                Profitez d'un cadre agréable, des espaces aérés et climatisés,
                des équipements de pointe et des coachs qualifiés pour vous
                encadrer, vous motiver et vous soutenir. Mayar Golden Gym est
                une salle de sport et de fitness qui vous propose des cours
                variés dans un espace de Fitness destiné aux adultes, ados et
                enfants. Vous trouverez tous ce qu'il vous faut dans nos espaces
                de musculation et Cardio Training avec un matériel de qualité.
              </p>
            </div>
            <div className="imgSlide">
              <CarouselHome />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
