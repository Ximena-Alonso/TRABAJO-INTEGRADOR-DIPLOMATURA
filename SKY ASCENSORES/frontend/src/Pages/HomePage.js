import React from 'react';
import '../Styles/componentes/Pages/HomePage.css'
const HomePage = (props)=>{
    return (
        <main className='holder'>
            <div id='empresa'>
                <div className='homeImg'>
                    <img src='images/inicio1.jpg' alt='inicio'/>
                </div>
                <div className='row'>
                    <div className='columna1'>
                        <h3>NOSOTROS</h3>
                        <p>Nace como respuesta a la creciente demanda de servicios provenientes de edificios, empresas y organizaciones, preocupadas por mejorar las condiciones de seguridad y funcionamiento de sus ascensores y demás equipos de transporte vertical (montacargas, montavehículos, etc.) y cumplir con las ordenanzas y reglamentaciones vigentes en esta materia.Nuestras prestaciones se basan en tres atributos principales: solidez técnica, rapidez de respuesta y precios accesibles. Contamos con moderna infraestructura tecnológica, amplio stock de repuestos y un plantel de profesionales y técnicos capacitados para brindar alta calidad de servicio en mínimos tiempos de respuesta, certificando cada tarea realizada.</p>
                    </div>
                    <div className='columna2'>
                        <h3>POLÍTICA DE CALIDAD</h3>
                        <p>Somos una empresa dedicada a la conservación, mantenimiento y reparación de ascensores, montacargas y guarda mecanizada de vehículos.</p>
                        <p>Nuestra misión es brindar un servicio de excelencia según las exigencias que presenta el mercado para lograr la plena satisfacción de nuestros clientes. Nuestra visión es mantener como prioridad el permanente cumplimiento de los requisitos del cliente, así como de los leales y reglamentarios aplicables. Nos comprometemos con el cuidado de la salud de los trabajadores y con la prevención de accidentes derivados de la prestación de nuestros servicios.</p>
                    </div>
                </div>

                <div className='eleccion'>
                    <h3>POR QUE ELEGIRNOS?</h3>
                    <ul>
                        <li><a><strong>Máxima seguridad y tecnología.</strong></a>
                            <span className='item'> Trabajamos cumpliendo estrictamente (y aún superando) las normas de seguridad vigentes, según lo establecen las ordenanzas, utilizando servicios computarizados de diagnóstico de fallas y procedimientos sustentados en tecnología de última generación.</span></li>
                        <li><a><strong>Acciones preventivas y calidad.</strong></a>
                            <span className="item ">Realizamos un control periódico de piezas que sufren desgastes por el uso, para evitar accidentes y reducir mayores gastos. Se realizan estrictos controles de calidad y un continuo seguimiento de las tareas realizadas</span></li>
                        <li><a><strong>Servicio de urgencias y rapidez de respuesta.</strong></a>
                            <span className="item ">Atendemos las 24 horas del día, los 365 días del año, contando para ello con una guardia permanente de técnicos especializados que se encuentran comunicados con nuestra base de operaciones, brindándole una rápida respuesta a sus inconvenientes, reclamos o emergencias, garantizando un plazo máximo de 2 horas para su respuesta.</span></li>
                        <li><a><strong>Información permanente.</strong></a>
                                <span className="item ">Toda novedad en códigos de reglamentación y/o normas de seguridad, y el informe técnico del estado de su ascensor, serán comunicados en forma rutinaria para su conocimiento. También efectuamos sin cargo adicional la presentación de los trámites para la solicitud del Libro de Inspección correspondiente, sin cargo adicional. Contará con nuestro asesoramiento integral, tanto en aspectos técnicos como en normas de seguridad para los usuarios de las máquinas, los que le serán enviados periódicamente.</span></li>
                        <li><a><strong>Garantías.</strong></a>
                            <span className="item ">Todos nuestros trabajos tienen garantía de funcionamiento a cargo de nuestra compañía. De acuerdo con las normas legales vigentes contamos con el Permiso de Conservador Nº 1057 y cuenta además con la protección del servicio de cobertura de la compañía de seguros SMG.</span></li>
                        <li><a><strong>Precios accesibles.</strong></a>
                            <span className="item ">Nuestras tarifas, acordes a la situación actual del país, están entre las más accesibles del mercado. También contamos con alternativas novedosas en descuentos y bonificaciones, para llegar a un precio final reducido respetando una óptima calidad en el servicio.</span></li>
                    </ul>

                </div>
            </div>
            
        </main>
    );
}

export default HomePage;