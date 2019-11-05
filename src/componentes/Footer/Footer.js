import React from 'react';
import './Footer.scss';
import face from '../../imagem/facebook.png';
import insta from '../../imagem/instagram.png';
import yout from '../../imagem/youtube.png';
import culturando from '../../imagem/cultura.png'


const Footer = () => {
    return ( 
        <div className="PP  ">
            <div className="Nome"> 
                <img src={culturando} alt="Nome do projeto"></img>
            </div>
            <div className="linha"></div>
            <div className="icones"> 
                <img src={face} alt="Facebook"></img>
                <img src={insta} alt="Instagram"></img>
                <img className="youtube" src={yout} alt="Youtube"></img>
            </div>
        </div>

    
    )
}
export default Footer;