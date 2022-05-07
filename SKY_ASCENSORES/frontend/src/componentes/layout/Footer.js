import React from 'react';
import '../../Styles/componentes/layout/Footer.css'
const Footer = (props)=>{
    return (
        <footer>
            <div className="row">
                <div className="columna1">
                    <h5>Derechos reservados  - SKY Ascensores / Diseño Ximen@</h5>
                </div>
                <div className="columna2">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fas fa-at"></i>
                </div>
            </div>   
        </footer>   
    );
}


export default Footer;