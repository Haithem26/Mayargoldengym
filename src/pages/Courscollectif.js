import React from "react";
import imgAerobic from "../images/aérobic.png";
import imgBodystep from "../images/bodyStep.png";
import imgBoxing from "../images/boxing.png";
import imgAmincissement from "../images/amincissement.png";
import imgZumba from "../images/zumba.png";
import Slide from "@material-ui/core/Slide";

const Courscollectif = () => {
  const checked = true;
  return (
    <div className="cours">
      <div className="cours-container">
        <h3>Les Cours collectifs</h3>
        <Slide
          direction="right"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 1500 } : {})}
        >
          <p className="card-desc">
            Participez aux cours collectifs pour sculptez, renforcez et affinez
            votre corps! Se défouler avec un programme riche et varié chez Mayar
            Golden Gym.
          </p>
        </Slide>

        <Slide
          direction="up"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 1000 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgBoxing} alt="Boxing"></img>
            </div>
            <div className="right-card">
              <h4>Boxe</h4>
              <p className="card-desc">
                La boxe, aussi appelée le noble art, est un sport de combat dans
                lequel deux adversaires, de même catégorie de poids, se
                rencontrent sur un ring, munis de gants rembourrés afin de
                limiter le risque de coupure, et s'échangent des coups de
                poings, portés au visage et au buste.
              </p>
            </div>
          </div>
        </Slide>

        <Slide
          direction="up"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 1500 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgBodystep} alt="body-step"></img>
            </div>
            <div className="right-card">
              <h4>Cardio-training</h4>
              <p className="card-desc">
                Le cardio-training, est un entraînement qui joue sur le contrôle
                de la fréquence cardiaque lors d’un effort à intensité
                progressive. Le cardio-training permet d’améliorer la
                performance du cœur et des poumons pour une meilleure
                distribution de l’oxygène.
              </p>
            </div>
          </div>
        </Slide>

        <Slide
          direction="up"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 2000 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgZumba} alt="RPM"></img>
            </div>
            <div className="right-card">
              <h4>Zumba</h4>
              <p className="card-desc">
                {" "}
                Zumba® est un mélange de danse et de fitness accessible à tous,
                composé de chorégraphies faciles à suivre et qui sculptent votre
                corps au son des derniers hits internationaux (Salsa, Reggaeton,
                Hip Hop, House, Dancehall…). Elle est pratiquée régulièrement
                par plus de 14 millions de personnes dans 185 pays !
              </p>
            </div>
          </div>
        </Slide>

        <Slide
          direction="up"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 3000 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgAerobic} alt="aerobic"></img>
            </div>
            <div className="right-card">
              <h4>Aerobic</h4>
              <p className="card-desc">
                Le cours Aerobic combine des mouvements de danse sur les
                derniers tubes du moment. Les chorégraphies sont simples, afin
                que tout le monde puisse participer. Au cours Aerobic, vous vous
                amuserez tout en améliorant votre forme. Avec un résultat rapide
                en brûlant un maximum de calories !
              </p>
            </div>
          </div>
        </Slide>

        <Slide
          direction="up"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 2500 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgAmincissement} alt="Amincissement"></img>
            </div>
            <div className="right-card">
              <h4>Amincissement</h4>
              <p className="card-desc">
                Amincissement est un cours de fitness construit autour
                d’ateliers cardio et de renforcement musculaire. Son objectif
                consiste à bruler les graisses et à modeler la silhouette grâce
                à des exercices ciblant certaines parties du corps.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Courscollectif;
