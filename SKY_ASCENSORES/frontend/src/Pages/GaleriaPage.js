import React from 'react';
import '../Styles/componentes/Pages/GaleriaPage.css'
const GaleriaPage = (props)=>{
    return (
        <seccion className="holder">
            <div className='galeria'>
                <p>SKY ASCENSORES es un protagonista dinámico que participa en forma activa en el desarrollo, fabricación e instalación de una amplia gama de medios de elevación que brindan la solución perfecta para necesidades del transporte vertical.</p>
                <div className='hidraulicos'>
                    <h3>HIDRAULICOS</h3>
                    <div className='foto'>
                        <img src='images/Galeria/hidra/imag1.jpg' alt='hidra1'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/hidra/imag2.jpg' alt='hidra2'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/hidra/imag3.jpg' alt='hidra3'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/hidra/imag4.jpg' alt='hidra4'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/hidra/imag5.jpg' alt='hidra5'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/hidra/imag6.jpg' alt='hidra6'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/hidra/imag7.jpg' alt='hidra7'></img>
                    </div>
                </div>
                <div className='panoramicos'>
                    <h3>PANORAMICOS</h3>
                    <div className='foto'>
                        <img src='images/Galeria/panora/panor1.jpg' alt='panor1'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/panora/panor2.jpg' alt='panor2'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/panora/panor3.jpg' alt='panor3'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/panora/panor4.jpg' alt='panor4'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/panora/panor5.jpg' alt='panor5'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/panora/panor6.jpg' alt='panor6'></img>
                    </div>
                </div>
                <div className='vehiculares'>
                    <h3>VEHICULARES</h3>
                    <div className='foto'>
                        <img src='images/Galeria/vehic/vehic1.jpg' alt='vehic1'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/vehic/vehic2.jpg' alt='vehic2'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/vehic/vehic3.jpg' alt='vehic3'></img>
                    </div>
                    <div className='foto'>
                        <img src='images/Galeria/vehic/vehic4.jpg' alt='vehic4'></img>
                    </div>
                </div>
            </div>

        </seccion>

    );
}


export default GaleriaPage;