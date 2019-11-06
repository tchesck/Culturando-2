import React from 'react';
import './Aside.scss';
import boy from '../../imagem/boy.png';
import man from '../../imagem/man.png';

const Aside = () => {
    return (
        <div className="Tudo">
            <h1>Selecione:</h1>
            <div className="Icons">
                
                <div className="boy">
                    <img src={boy} alt="Menino"></img>
                    <h3>Criança</h3>
                </div>
                <div className="man">
                    <img src={man} alt="Homem"></img>
                </div>

            </div>
        </div>
    )
}
export default Aside;