import React from "react";
import Slide from "@material-ui/core/Slide";
import imgkidsGym from "../images/kids_gym.png";
import imgkidsBoxe from "../images/kids_boxe.png";
import imgZumbaKids from "../images/zumba_kids.png";

const ClubEnfant = () => {
  const checked = true;
  return (
    <div className="cours">
      <div className="cours-container">
        <h3>Club Enfant</h3>

        <Slide
          direction="right"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 1200 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgkidsBoxe} alt="kids boxe"></img>
            </div>
            <div className="right-card">
              <h4>Kids-Boxe</h4>
              <p className="card-desc">
                {" "}
                La boxe est un sport vraiment complet qui travaille tant le
                physique que le mental. Ce n'est pas un sport violent qui vous
                apprend à frapper les autres. Pas du tout ! Au contraire, tout
                bon coach vous expliquera que pour faire de la boxe, il faut en
                respecter les règles. C'est un sport avec une véritable éthique.
              </p>
            </div>
          </div>
        </Slide>

        <Slide
          direction="right"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 1200 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgkidsGym} alt="kids Gym"></img>
            </div>
            <div className="right-card">
              <h4>Kids-Gym</h4>
              <p className="card-desc">
                La gymnastique est un sport, qui peut être physique, mais aussi
                artistique. L’objectif est d’offrir un apprentissage progressif
                des bases de la gymnastique qui respecte les aptitudes et les
                capacités motrices des enfants tout en s’amusant.
              </p>
            </div>
          </div>
        </Slide>

        <Slide
          direction="right"
          in={checked}
          mountOnEnter
          unmountOnExit
          {...(checked ? { timeout: 1200 } : {})}
        >
          <div className="cards">
            <div className="left-card">
              <img src={imgZumbaKids} alt="kids Gym"></img>
            </div>
            <div className="right-card">
              <h4>Zumba-Kids</h4>
              <p className="card-desc">
                Les enfants de 7 à 11 ans peuvent pratiquer une activité
                physique et se défouler au rythme de leur musique préférée. Les
                séances Zumba Kids comportent des mouvements adaptés aux
                enfants, basés sur la chorégraphie Zumba®originale. Nous
                simplifions les pas, ajoutons des jeux, des activités et des
                éléments d'exploration culturelle dans la structure du cours.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ClubEnfant;
