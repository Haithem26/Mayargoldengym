import React from "react";

import { Fade } from "@material-ui/core";
import Carouselmusculation from "../components/Carouselmusculation";

const Musculation = () => {
  const checked = true;
  return (
    <div className="musculation">
      <Fade in={checked} {...(checked ? { timeout: 2000 } : {})}>
        <div className="musc-container">
          <h3>Espace de musculation:</h3>
          <p>
            Gagner en tonicité, modeler votre silhouette, augmenter votre force,
            développer votre masse musculaire… Quel que soit votre objectif,
            Mayar Golden Gym met à votre disposition un espace musculation
            complet.
          </p>
          <p>
            Des postes dédiés à la musculation vous attendent, machines guidées,
            postes d’entrainement libres, poids libres jusque 60 kilos, barres…
            Pectoraux, épaules, dos, bras, cuisses, abdominaux… vous allez
            pouvoir travailler tous les groupes musculaires en variant les
            exercices.
          </p>
          <div className="img-musc-container">
            <Carouselmusculation />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Musculation;
