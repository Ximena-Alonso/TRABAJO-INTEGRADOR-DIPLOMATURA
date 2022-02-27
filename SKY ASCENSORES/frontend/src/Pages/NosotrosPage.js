import React from 'react';
import '../Styles/componentes/Pages/NosotrosPage.css'
const NosotrosPage = (props)=>{
    return (
        <main className="holder">
            <div id='nosotros'>
                <div className='descripcion'>
                    <img src='images/nosotros/nos1.jpg' alt='nos1'></img>
                </div>
                <div className='descripcion'>
                    <h2>Factor de exito sostenible de nuestra empresa: Capital Humano</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero at vitae soluta voluptates, sed ipsum nemo iure quo maiores architecto tenetur eius dignissimos hic sapiente rerum ipsam ea facilis?.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sunt nemo, impedit nulla ipsa officiis assumenda consequatur neque quaerat ratione. Sint odio aut quae illo voluptates porro quia libero sed.</p>
                </div>
                <div className='staff'>
                    <h2>Staff</h2>
                    <div className='personas'>
                        <div className='persona'>
                            <img src='images/nosotros/nosotros1.jpg' alt='nosotros1'></img>
                            <h5>JUAN GOMEZ</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quidem dolores pariatur ipsam nemo corporis non libero, culpa voluptates et quam explicabo facere eaque fugiat aut reprehenderit velit sapiente porro.</p>
                        </div>
                        <div className='persona'>
                            <img src='images/nosotros/nosotros2.jpg' alt='nosotros2'></img>
                            <h5>DIANA REYER</h5>
                            <h6>Gerente Comercial</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quidem dolores pariatur ipsam nemo corporis non libero, culpa voluptates et quam explicabo facere eaque fugiat aut reprehenderit velit sapiente porro.</p>
                        </div>
                        <div className='persona'>
                            <img src='images/nosotros/nosotros3.jpg' alt='nosotros3'></img>
                            <h5>ROBERTO ZAPATO</h5>
                            <h6>Gerente de Sistemas</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quidem dolores pariatur ipsam nemo corporis non libero, culpa voluptates et quam explicabo facere eaque fugiat aut reprehenderit velit sapiente porro.</p>
                        </div>
                        <div className='persona'>
                            <img src='images/nosotros/nosotros4.jpg' alt='nosotros4'></img>
                            <h5>SANDRA GUERRA</h5>
                            <h6>Gerente de Marketing</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quidem dolores pariatur ipsam nemo corporis non libero, culpa voluptates et quam explicabo facere eaque fugiat aut reprehenderit velit sapiente porro.</p>
                        </div>
                        <div className='persona'>
                            <img src='images/nosotros/nosotros5.jpg' alt='nosotros5'></img>
                            <h5>LUCIANO CAKE</h5>
                            <h6>Gerente de Logistica</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quidem dolores pariatur ipsam nemo corporis non libero, culpa voluptates et quam explicabo facere eaque fugiat aut reprehenderit velit sapiente porro.</p>
                        </div>
                    </div>

                </div>

            </div>

        </main>

    );
}


export default NosotrosPage;