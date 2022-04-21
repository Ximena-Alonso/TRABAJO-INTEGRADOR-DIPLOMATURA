import React from 'react';
import '../Styles/componentes/Pages/HomePage.css'
const HomePage = (props)=>{
    return (
        <main className='holder'>
            <div id='empresa'>
                <div className='homeImg'>
                    <img src='images/inicio1.jpg' alt='inicio'/>
                </div>
                <div className='eleccion'>
                    <h3>POR QUE ELEGIRNOS?</h3>
                    <div className="accordion" id="accordions">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Máxima seguridad y tecnología.</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordions">
                                <div className="accordion-body">Trabajamos cumpliendo estrictamente (y aún superando) las normas de seguridad vigentes, según lo establecen las ordenanzas, utilizando servicios computarizados de diagnóstico de fallas y procedimientos sustentados en tecnología de última generación.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><strong>Acciones preventivas y calidad.</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordions">
                                <div className="accordion-body">Realizamos un control periódico de piezas que sufren desgastes por el uso, para evitar accidentes y reducir mayores gastos. Se realizan estrictos controles de calidad y un continuo seguimiento de las tareas realizadas
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><strong>Servicio de urgencias y rapidez de respuesta.</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordions">
                                <div className="accordion-body">Atendemos las 24 horas del día, los 365 días del año, contando para ello con una guardia permanente de técnicos especializados que se encuentran comunicados con nuestra base de operaciones, brindándole una rápida respuesta a sus inconvenientes, reclamos o emergencias, garantizando un plazo máximo de 2 horas para su respuesta.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><strong>Información permanente.</strong>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordions">
                                <div className="accordion-body">Toda novedad en códigos de reglamentación y/o normas de seguridad, y el informe técnico del estado de su ascensor, serán comunicados en forma rutinaria para su conocimiento. También efectuamos sin cargo adicional la presentación de los trámites para la solicitud del Libro de Inspección correspondiente, sin cargo adicional. Contará con nuestro asesoramiento integral, tanto en aspectos técnicos como en normas de seguridad para los usuarios de las máquinas, los que le serán enviados periódicamente.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><strong>Garantías.</strong>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordions">
                                <div className="accordion-body">Todos nuestros trabajos tienen garantía de funcionamiento a cargo de nuestra compañía. De acuerdo con las normas legales vigentes contamos con el Permiso de Conservador Nº 1057 y cuenta además con la protección del servicio de cobertura de la compañía de seguros SMG.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"><strong>Precios accesibles.</strong>
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordions">
                                <div className="accordion-body">Nuestras tarifas, acordes a la situación actual del país, están entre las más accesibles del mercado. También contamos con alternativas novedosas en descuentos y bonificaciones, para llegar a un precio final reducido respetando una óptima calidad en el servicio.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                   <div className='row'>
                       <div className='col-sm 12 col-md 6'>
                           <div className='card'>
                                <img src="images/historia.jpg" className="card-img-top"  alt="historia"/>
                                <div className="card-body">
                                    <h5 className="card-title">HISTORIA</h5>
                                    <p className="card-text">Nuestra empresa nace como respuesta a la creciente demanda de servicios provenientes de edificios, empresas y organizaciones, preocupadas por mejorar las condiciones de seguridad y funcionamiento de sus ascensores y demás equipos de transporte vertical.</p>
                                </div>
                           </div>
                        </div>
                        <div className='col-sm 12 col-md 6'>   
                           <div className='card'>
                                <img src="images/calidad.jpg" className="card-img-top"  alt="politica de calidad"/>
                                <div className="card-body">
                                    <h5 className="card-title">POLÍTICA DE CALIDAD</h5>
                                    <p className="card-text">Misión: brindar un servicio de excelencia según las exigencias que presenta el mercado para lograr la plena satisfacción de nuestros clientes.Visión: mantener como prioridad el permanente cumplimiento de los requisitos del cliente, así como de los leales y reglamentarios aplicables.</p>
                                </div>
                           </div>
                       </div>
                    </div> 
                </div>  
            </div>
        </main>
    );
}

export default HomePage;