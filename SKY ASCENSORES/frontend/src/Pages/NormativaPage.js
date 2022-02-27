import React from 'react';
import '../Styles/componentes/Pages/NormativaPage.css'
const NormativaPage = (props)=>{
    return (
        <seccion className='holder' id='normativa'>
            <h1>Encuentra los Normativas y regulaciones vigentes en la República Argentina.</h1>
            <div className='ascensores1'>
                <h2>Ascensores</h2>
                <h3>Ordenanza 6035/1995</h3>
                <p>Establécese por la presente, condiciones para la conservación de ascensores, montacargas, escaleras mecánicas, guardas mecanizadas de vehículos y rampas móviles.</p>
            </div>
            <div className='ascensores2'>
                <h3>Ordenanza Nº 6345/1997</h3>
                <p>Reglamento de Edificación. Sección 3º. Ascensores. Equipos de elevación. Dispositivos de seguridad. Instalación. Obligación. Propietarios. Responsables Legales. Incumplimiento. Sanción.</p>
            </div>
            <div className='ascensores3'>
                <h3>Ordenanza Nº 6575/1998</h3>
                <p>Reglamento de Edificación. Sección 3º. Ascensores. Puertas. Recubrimiento. Puertas Tijeas</p>
            </div>
            <div className='ascensores4'>
                <h3>Ordenanza Nº 9006/2012</h3>
                <p>Reglamento de edificación. Ascensores. Modificación</p>
            </div>
            <div className='accesibilidad1'>
                <h2>Accesibilidad</h2>
                <h3>MODIFICACION DE LA LEY No 22.431</h3>
                <p>ACCESIBILIDAD DE PERSONAS CON MOVILIDAD REDUCIDA. MODIFICACION DE LA LEY Establécese la prioridad de la supresión de barreras físicas en los ámbitos urbanos, arquitectónicos y del transporte que se realicen o en los existentes que remodelen o sustituyan en forma total o parcial sus elementos constitutivos, con el fin de lograr la accesibilidad para las personas con movilidad reducida, y mediante la aplicación de las normas contenidas en el presente capítulo.</p>
                </div>
                <div className='accesibilidad2'>
                <h3>Decreto Nº 914/97</h3>
                <p>La norma mencionada pretende, así, alcanzar nuevos niveles de bienestar general, estableciendo disposiciones destinadas a facilitar la accesibilidad y la utilización para todos los ciudadanos, de las nuevas realizaciones a concretarse en los espacios libres de edificación y en los edificios y locales de uso o concurrencia de público, ya sean estos de titularidad o dominio público o privado, así como respecto de las unidades de transporte de pasajeros que constituyan servicio público.</p>
            </div>
        </seccion>

    );
}

export default NormativaPage;