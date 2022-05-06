import React, {useState} from "react";
import axios from 'axios';

import '../Styles/componentes/Pages/ContactoPage.css'

const ContactoPage = (props)=>{

    const initialForm={
        nombre:'',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e=> {
        const {name, value} = e.target;
        setFormData (oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit =async e => {
        e.preventDefault();
        setMsg ('');
        setSending (true)
        const response = await axios.post (`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending (false);
        setMsg (response.data.message);
        if(response.data.error ===false) {
            setFormData(initialForm)
        }
    }

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
                    <form action='/contacto' method='post' className='formulario' onSubmit={handleSubmit}>
                        <p>                   
                            <label>Nombre: </label>
                            <input type='text' name="nombre" placeholder='Nombre' value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>                   
                            <label>Email: </label>
                            <input type='email' name="email" placeholder='email' value={formData.email} onChange={handleChange} />
                        </p>
                        <p>                   
                            <label>Telefono:   </label>
                            <input type='text' name='telefono' placeholder='Telefono' value={formData.telefono} onChange={handleChange} />
                        </p>    
                        <p>                   
                            <label>Comentario:   </label>
                            <textarea name='mensaje' placeholder='Mensaje' value={formData.mensaje} onChange={handleChange} />
                        </p>
                        
                        <p className='centrar '><input type='submit' value='Enviar'/>
                        </p>
                        
                    </form>
                    { sending ? <p>Enviando...</p>: null}
                    { msg ? <p> {msg} </p>: null}
                </div>
            </div>    
        </seccion>

    );
}


export default ContactoPage;