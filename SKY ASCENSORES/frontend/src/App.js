
import Header from "./componentes/layout/Header.js";
import Footer from "./componentes/layout/Footer.js";
import Nav from "./componentes/layout/Nav.js";
import './App.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage.js";
import ContactoPage from "./Pages/ContactoPage.js";
import GaleriaPage from "./Pages/GaleriaPage.js";
import NormativaPage from "./Pages/NormativaPage.js";
import NosotrosPage from "./Pages/NosotrosPage.js";
import NovedadesPage from "./Pages/NovedadesPage.js";
import ServiciosPage from "./Pages/ServiciosPage.js";

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Nosotros" exact component={NosotrosPage}/>
        <Route path="/Servicios" exact component={ServiciosPage}/>
        <Route path="/Galeria" exact component={GaleriaPage}/>
        <Route path="/Normativa" exact component={NormativaPage}/>
        <Route path="/Novedades" exact component={NovedadesPage}/>
        <Route path="/Contacto" exact component={ContactoPage}/>
      </Switch>
      <Footer/>

    </Router> 
  

      
  );
}

export default App;
