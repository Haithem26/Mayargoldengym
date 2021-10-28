import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import Grow from '@material-ui/core/Grow';
import { Fade } from '@material-ui/core';


const Tarifs = () => {
    
  const checked = true;

    return (
        <Fade in={checked} {...(checked ? { timeout: 1500 } : {})}>
            <div className="tarifs">
                <div className="tarifs-container">
                    <h1>Tarifs:</h1> 

                    <div className="subscription">
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}
                        >
                            <div className="subMusculation">
                                <div className="box-header">
                                    <h2>Abonnement: Musculation</h2>
                                    <p>Ouvert 08:00 - 21:00 H</p>
                                    <div className="border border-danger"></div>
                                </div>
                                
                                <div className="box-desc">
                                    <p>Prix: 40 dt  12 séances / Mois</p>
                                    <p>Prix: 50 dt  16 séances / Mois</p>
                                    <p>Prix: 60 dt  Accès illimité / Mois</p>
                                    <p>Prix: 330 dt  Accès illimité / 6 Mois</p>
                                </div>
                            
                                <Link to="/contact"><Button variant="contained" 
                                            style={{backgroundColor:'#222222', 
                                            color: 'white', 
                                            width:'100%',
                                            margin: 'auto',
                                            bottom:0
                                    }}>
                                        S'abonner 
                                    </Button>
                                </Link>
                            
                            </div>
                        </Grow> 

                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1500 } : {})}
                        >

                            <div className="subCardio">
                                <div className="box-header">
                                    <h2>Abonnement: Cardio-training</h2>
                                    <p> 3 séances par semaine</p>
                                    <div className="border border-danger"></div>
                                </div>

                                <div className="box-desc">
                                    <p>Prix: 40 dt / Mois</p>
                                    <p>Prix: 220 dt / 6 Mois</p>
                                </div>
                                <Link to="/contact">
                                    <Button variant="contained" 
                                            style={{backgroundColor:'#222222', 
                                            color: 'white', 
                                            width:'100%',
                                            margin: 'auto'
                                    }}>
                                        S'abonner 
                                    </Button>
                                </Link>
                            </div>
                        </Grow>

                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 2000 } : {})}
                        >
                            <div className="subAerobic">
                                <div className="box-header">
                                    <h2>Abonnement: Cours collectifs</h2>
                                    <p> 3 séances par semaine </p>
                                    <div className="border border-danger"></div>
                                </div>

                                <div className="box-desc">
                                    <p>Prix: 40 dt / Mois</p>
                                    <p>Prix: 220 dt / 6 Mois</p>
                                </div>
                                <Link to="/contact"><Button variant="contained" 
                                            style={{backgroundColor:'#222222', 
                                            color: 'white', 
                                            width:'100%',
                                            margin: 'auto'
                                    }}>
                                        S'abonner 
                                    </Button></Link>
                            </div>
                        </Grow>

                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Tarifs;