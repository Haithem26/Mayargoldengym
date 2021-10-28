import React from 'react';
import imgbacsport from '../images/bacsport.png';
import { Fade } from '@material-ui/core';

const Bacsport = () => {
    const checked = true;
    return (
        <div className="bacSport">
            <Fade in={checked} {...(checked ? { timeout: 2000 } : {})}
                        >
            <div className="bacSport-container">
                <h3>Bac sport</h3>
                <p>Mayar Golden Gym vous propose des séances de préparation et d’entrainement en gymnastique pour le Bac Sport (filles/garçons).</p>
                <p>Des spécialistes à votre disposition et des horaires bien flexibles.</p>
                <span>Au programme :</span>
                <div className="bac-box">
                    <ol>
                        <li> Conseiller et aider les candidats à choisir un enchaînement adapté à sa condition physique. </li>
                        <li> Travailler sur le renforcement musculaire et la souplesse pour préparer votre corps à enchaînement. </li>
                        <li> Préparer l’enchaînement complet et spécifique selon les capacités des candidats. </li>
                    </ol>
                    <div className="imgbacsport">
                        <img src={imgbacsport} alt="bacsport" />
                    </div>

                </div>
                
            </div>
            </Fade>
        </div>
    );
};

export default Bacsport;