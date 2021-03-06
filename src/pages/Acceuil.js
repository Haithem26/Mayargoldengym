import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo_a from "../images/logomayar.png";

import "aos/dist/aos.css";
import Aos from "aos";

import CarouselHome from "../components/CarouselHome";

const Acceuil = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="parallax">
      <section data-aos="fade-down" className="sect1">
        <div className="sect1content">
          <h1>BIENVENUE À Mayar Golden Gym</h1>
          <div className="front-img">
            <img src={logo_a} alt="log mayar"></img>
          </div>
          <h3> Salle de sport et de Fitness </h3>
          <div className="btn-sect1">
            <Link to="/espace-musculation">
              <button>Club</button>
            </Link>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="sect2">
        <div className="sect2Content" data-aos="fade-right">
          <h1>Consulter Nos tarifs</h1>
          <Link className="btn-2" to="/tarifs">
            Nos Tarifs
          </Link>
        </div>
      </section>
      <section className="sect3">
        <div data-aos="fade-right" className="sect3Content">
          <h1>Qui sommes Nous ?</h1>
          <div className="descirption">
            <p>
              Profitez d'un cadre agréable, des espaces aérés et climatisés, des
              équipements de pointe et des coachs qualifiés pour vous encadrer,
              vous motiver et vous soutenir. Mayar Golden Gym est une salle de
              sport et de fitness qui vous propose des cours variés dans un
              espace de Fitness destiné aux adultes, ados et enfants. Vous
              trouverez tous ce qu'il vous faut dans nos espaces de musculation
              et Cardio Training avec un matériel de qualité.
            </p>
          </div>
          <div className="imgSlide">
            <CarouselHome />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acceuil;
/*
 <Link className="btn_Club" to="/espace-musculation">
              Club
            </Link>
            <Link className="btn-contact" to="/contact">
              Contact
            </Link>*/
