import React from 'react';
import { Fade } from '@material-ui/core';

const Fitness = () => {
    const checked = true;
    return (
        <div className="fitness">
            <Fade in={checked} {...(checked ? { timeout: 2000 } : {})}>
            <div className="fitness-container">
                <h3> Espace de Fitness </h3>
                <p>Mayar Golden Gym vous propose des cours du lundi au dimanche dans son espace Fitness.
                    
                </p>
                <p>Tous les cours sont encadrés par des professionnels :</p>
                <ul>
                    <li><span>Abdos, Barres-Haltères, Amincissement,… </span>Pour vous tonifier, modeler votre silhouette, avoir une meilleure posture…</li>
                    <li><span>Zumba, Aerobic, Step.</span> Pour améliorer votre condition physique, vous dépenser, bruler les calories, tout en vous amusant. </li>
                    <li><span>Le Circuit-Training,</span> un cours avec plusieurs ateliers pour travailler à la fois cardio, force et explosivité.</li>
                </ul>
            </div>
            </Fade>
        </div>
    );
};

export default Fitness;