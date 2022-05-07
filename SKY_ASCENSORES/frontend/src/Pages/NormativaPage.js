import React from 'react';
import '../Styles/componentes/Pages/NormativaPage.css'
const NormativaPage = (props)=>{
    return (
        <seccion className='holder row' id='normativa'>
            <h3>Encuentra los Normativas y regulaciones vigentes en la República Argentina.</h3>
            <h4>Ascensores</h4>
            <div className='ascensores col-lg-3 col-md-6 col-xs-12'>
                
                <h5>Ordenanza 6035/1995</h5>
                <p>Establécese por la presente, condiciones para la conservación de ascensores, montacargas, escaleras mecánicas, guardas mecanizadas de vehículos y rampas móviles.</p>
            </div>
            <div className='ascensores col-lg-3 col-md-6 col-xs-12'>
                <h5>Ordenanza Nº 6345/1997</h5>
                <p>Reglamento de Edificación. Sección 3º. Ascensores. Equipos de elevación. Dispositivos de seguridad. Instalación. Obligación. Propietarios. Responsables Legales. Incumplimiento. Sanción.</p>
            </div>
            <div className='ascensores col-lg-3 col-md-6 col-xs-12'>
                <h5>Ordenanza Nº 6575/1998</h5>
                <p>Reglamento de Edificación. Sección 3º. Ascensores. Puertas. Recubrimiento. Puertas Tijeas</p>
            </div>
            <div className='ascensores col-lg-3 col-md-6 col-xs-12'>
                <h5>Ordenanza Nº 9006/2012</h5>
                <p>Reglamento de edificación. Ascensores. Modificación</p>
            </div>
            <h4>Accesibilidad</h4>
            <div className='accesibilidad1 col-lg-6 col-md-12'>
                
                <h5>MODIFICACION DE LA LEY No 22.431</h5>
                <p>ACCESIBILIDAD DE PERSONAS CON MOVILIDAD REDUCIDA. MODIFICACION DE LA LEY Establécese la prioridad de la supresión de barreras físicas en los ámbitos urbanos, arquitectónicos y del transporte que se realicen o en los existentes que remodelen o sustituyan en forma total o parcial sus elementos constitutivos, con el fin de lograr la accesibilidad para las personas con movilidad reducida, y mediante la aplicación de las normas contenidas en el presente capítulo.</p>
                </div>
            <div className='accesibilidad2 col-lg-6 col-md-12'>
                <h5>Decreto Nº 914/97</h5>
                <p>La norma mencionada pretende, así, alcanzar nuevos niveles de bienestar general, estableciendo disposiciones destinadas a facilitar la accesibilidad y la utilización para todos los ciudadanos, de las nuevas realizaciones a concretarse en los espacios libres de edificación y en los edificios y locales de uso o concurrencia de público, ya sean estos de titularidad o dominio público o privado, así como respecto de las unidades de transporte de pasajeros que constituyan servicio público.</p>
            </div>
        </seccion>

    );
}

export default NormativaPage;