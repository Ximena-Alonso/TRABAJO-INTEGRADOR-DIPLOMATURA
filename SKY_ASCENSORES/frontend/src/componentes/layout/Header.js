import React from 'react';
import '../../Styles/componentes/layout/Header.css'
const Header = (props)=>{
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src= "images/logo.jpg" width="100" alt= " SKY ascensores"/>
                    <h1>SKY Ascensores</h1>
                    
                </div>

            </div>
        </header>
    );
}


export default Header;