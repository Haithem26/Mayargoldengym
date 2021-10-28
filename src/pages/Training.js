import React from 'react';
import treadmills from '../images/musc/DSC_0695.JPG';
import { Fade } from '@material-ui/core';

const Training = () => {
    const checked = true;
    return (
        <div className="training">
            <Fade in={checked} {...(checked ? { timeout: 2000 } : {})}>
                <div className="training-container">
                    <h3> Espace cardio training</h3>
                    <p>Notre espace cardio-training dispose d’un équipement complet, simple d’utilisation et régulièrement rénové, pour vous permettre d’améliorer votre endurance, 
                        votre condition physique, vous faire perdre du poids  en brûlant les graisses…</p>
                        <span>L’espace cardio-training</span>
                        <div className="training-bloc">
                            <ul className="left-bloc">
                                <li>Tapis de course</li>
                                <li>Vélos droits et semi-allongés</li>
                                <li>Vélos elliptiques</li>
                                <li>Steppers</li>
                            </ul>
                            <div className="img-training">
                                <img src={treadmills} alt=" treadmills"></img>
                            </div>
                        </div>
                </div>
            </Fade>
           
        </div>
    );
};

export default Training;