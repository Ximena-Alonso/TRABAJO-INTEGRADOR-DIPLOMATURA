import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/novedades/novedadItem';
var cloudinary =require ('cloudinary').v2;

import '../Styles/Novedades.css';

const NovedadesPage= (props)=>{
    const [loading, setLoading] =useState [false];
    const [novedades, setNovedades] =useState([]);

    useEffect (() => {
        const cargarNovedades =async() => {
            setLoading (true);
            const response =await axios.get('http://localhost:3000/api/novedades');
            setNovedades (response.data);
            setLoading (false);
        };

        cargarNovedades(); 
    }, []);


    return (
            <section className="holder" id='novedades'>
            
                    <h1>Novedades </h1>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map (item=> <NovedadItem key={item.id}
                            service= {item.servicio} time={item.plazo} imagen={item.imagen} description={item.descripcion} />)
                    )}
            </section>
    );
}


export default NovedadesPage;