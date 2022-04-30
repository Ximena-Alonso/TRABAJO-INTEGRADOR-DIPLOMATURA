import React from 'react';
import '../Styles/componentes/Pages/ServiciosPage.css'
const ServiciosPage = (props)=>{
    return (
        <seccion className='holder' id='servicios' >
            <div className='ser_img'>
                <img src='images/servicios/serv.jpg' alt='serv'/>
                <h3>Nuestro compromiso es aportar valor mediante la innovación permanente y la búsqueda activa de nuevas soluciones tecnológicas. Gracias a esta filosofía hoy ocupamos una posición de liderazgo a nivel internacional.</h3>
            </div>
            <div className='servicios'>
                <img src='images/servicios/serv1.jpg' alt='serv1'/>
                <div className='ser_info'>
                    <h4>Instalaciones y Proyectos</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptate assumenda, est totam molestias consequatur voluptatibus quia praesentium repellendus consectetur amet temporibus repellat minima ipsam aliquid quidem! Provident, aut id?.</p>
                </div>
            </div>
            <div className='servicios'>
                <img src='images/servicios/serv2.jpg' alt='serv2'/>
                <div className='ser_info'>
                    <h4>Modernizaciones</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptate assumenda, est totam molestias consequatur voluptatibus quia praesentium repellendus consectetur amet temporibus repellat minima ipsam aliquid quidem! Provident, aut id?.</p>
                </div>
            </div>
            <div className='servicios'>
                <img src='images/servicios/serv3.jpg' alt='serv3'/>
                <div className='ser_info'>
                    <h4>Mantenimiento</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptate assumenda, est totam molestias consequatur voluptatibus quia praesentium repellendus consectetur amet temporibus repellat minima ipsam aliquid quidem! Provident, aut id?.</p>
                </div>
            </div>
        </seccion>
    );
}


export default ServiciosPage;