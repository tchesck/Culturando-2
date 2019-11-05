import React from 'react';
import './Footer.scss';
import face from '../../imagem/facebook.png';
import insta from '../../imagem/instagram.png';
import yout from '../../imagem/youtube.png'


const Footer = () => {
    return ( 
        <div className="PP  ">
            <div className="linha">
                <p>
    
                </p>

            </div>
            <div className="icones"> 
                <img src={face} alt="kjsbf"></img>
                <img src={insta} alt="kjsbf"></img>
                <img className="youtube" src={yout} alt="kjsbf"></img>
            </div>
        </div>

    
    )
}
export default Footer;