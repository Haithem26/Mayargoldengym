
import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Acceuil from './pages/Acceuil';
import Bacsport from './pages/Bacsport';
import Contact from './pages/Contact';
import Courscollectif from './pages/Courscollectif';
import Fitness from './pages/Fitness';
import Footer from "./components/Footer";
import Musculation from './pages/Musculation';
import Tarifs from './pages/Tarifs';
import "./styles/index.css"
import Training from "./pages/Training";

import Navigations from "./components/Navigations";
import ClubEnfant from "./pages/ClubEnfant";


function App() {


  return  (
    <div className="App">
  
      <Router>  
      <Navigations />
          <Switch>
            <Route exact path="/" component={Acceuil} />
            <Route path="/cours-collectifs" component={Courscollectif} />
            <Route path="/espace-fitness" component={Fitness} />
            <Route path="/espace-musculation" component={Musculation} />
            <Route path="/espace-training" component={Training} />
            <Route path="/tarifs" component={Tarifs} />
            <Route path="/bac-sport" component={Bacsport} />
            <Route path="/contact" component={Contact} />
            <Route path= "/club-enfant" component={ClubEnfant} />
            <Redirect to='/' />
          </Switch>
          <Footer />  
      </Router>

    </div>
    
  );
}

export default App;
