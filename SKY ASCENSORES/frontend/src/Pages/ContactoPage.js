import React from 'react';
import '../Styles/componentes/Pages/ContactoPage.css'
const ContactoPage = (props)=>{
    return (
        <seccion className='holder' id='contacto'>
            <div className='contacto'>
                <h3>Encuentra las soluciones en sistemas de elevación o accesibilidad</h3>
                <p>Brindamos la mejor solución técnica para encontrar la respuesta que mejor se adapte al espacio y situación en la instalación de un equipo.</p>
                <p>Desde asesoramiento para el planeamiento, la instalación de un equipo, o decidir qué sistema instalar.</p>
                <p>Conozca las posibles mejoras en el servicio de mantenimiento, las soluciones en accesibilidad para hogares, empresas o instituciones.</p>
                <p>Seguro podemos acercarle la solución que busca.</p>
            </div>
            
            <div className='columnas'>
                <div className='columna left'>
                    <h3>Oficina comercial</h3>
                    <p>Av. Triunvirato 1111 Mar del Plata, Argentina</p>
                    <p>Telefono: (0223) 455-1111 / 455-1112</p>
                    <p>WhatsApp: +223 555-1112</p>
                    <div className='redes'>
                        <i className="fab fa-facebook">  <b>Facebook: Sky Ascensores</b></i>
                        <i className="fab fa-instagram">  <b>Instagram: Sky Ascensores</b></i>
                        <i className="fab fa-twitter">  <b>Twiter: Sky Ascensores</b></i>
                        <i className="fas fa-at">Email: contacto@skyascensores</i>
                    </div>
                    
                </div>
                <div className='columna right'>
                    <h2>Contactese con nosotros</h2>
                    <form action='' method='' className='formulario'>
                        <p>                   
                            <label>Nombre: </label>
                            <input type='text' name='nombre' placeholder='Nombre' />
                        </p>
                        <p>                   
                            <label>Email: </label>
                            <input type='email' name='email' placeholder='email' />
                        </p>
                        <p>                   
                            <label>Telefono:   </label>
                            <input type='text' name='telefono' placeholder='Telefono' />
                        </p>    
                        <p>                   
                            <label>Comentario:   </label>
                            <textarea name='mensaje' placeholder='Mensaje' />
                        </p>
                        <p className='centrar '><input type='submit' value='Enviar'/>
                        </p>
                        
                    </form>
                </div>
            </div>    
        </seccion>

    );
}


export default ContactoPage;