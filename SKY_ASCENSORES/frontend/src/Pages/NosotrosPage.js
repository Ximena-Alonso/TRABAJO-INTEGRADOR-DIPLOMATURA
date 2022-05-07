import React from 'react';
import '../Styles/componentes/Pages/NosotrosPage.css'
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div id='nosotros'>
                <div className='descripcion'>
                    <img src='images/nosotros/nos1.jpg' alt='nos1'></img>
                </div>
                <div className='descripcion'>
                    <h3>Factor de exito sostenible de nuestra empresa: Capital Humano</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing edivt. Ipsa divbero at vitae soluta voluptates, sed ipsum nemo iure quo maiores architecto tenetur eius dignissimos hic sapiente rerum ipsam ea facidivs?.Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Vedivt sunt nemo, impedit nulla ipsa officiis assumenda consequatur neque quaerat ratione. Sint odio aut quae illo voluptates porro quia divbero sed.</p>
                </div>

                <div className='staff'>
                    <h3>Staff</h3>
                    <div className='container'>
                        <div className='slider'>
                            <div className='personas'>

                                <div className='persona' id='1'>
                                    <figure><img src='images/nosotros/nosotros1.jpg' alt='nosotros1'></img>
                                        <h5>JUAN GOMEZ</h5>
                                        <h6>Gerente General</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero, .</p></figure>
                                </div>
                                <div className='persona' id='2'>
                                    <figure><img src='images/nosotros/nosotros2.jpg' alt='nosotros2'></img>
                                        <h5>DIANA REYER</h5>
                                        <h6>Gerente Comercial</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero, .</p></figure>
                                </div>
                                <div className='persona' id='3'>
                                    <figure><img src='images/nosotros/nosotros3.jpg' alt='nosotros3'></img>
                                        <h5>ROBERTO ZAPATO</h5>
                                        <h6>Gerente de Sistemas</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero, .</p></figure>
                                </div>


                                <div className='persona' id='4'>
                                    <figure><img src='images/nosotros/nosotros4.jpg' alt='nosotros4'></img>
                                        <h5>SANDRA GUERRA</h5>
                                        <h6>Gerente de Marketing</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero, .</p></figure>
                                </div>
                                <div className='persona' id='5'>
                                    <figure><img src='images/nosotros/nosotros5.jpg' alt='nosotros5'></img>
                                        <h5>LUCIANO CAKE</h5>
                                        <h6>Gerente de Logistica</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero, .</p></figure>
                                </div>
                                <div className='persona' id='6'>
                                    <figure> <img src='images/nosotros/nosotros6.jpg' alt='nosotros5'></img>
                                        <h5>MARK WOODS</h5>
                                        <h6>Gerente de Imagen</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero, .</p></figure>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default NosotrosPage;