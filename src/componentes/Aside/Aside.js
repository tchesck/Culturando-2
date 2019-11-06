import React from 'react';
import './Aside.scss';
import boy from '../../imagem/boy.png';
import man from '../../imagem/man.png';
import {Link} from 'react-router-dom';

const Aside = () => {
    return (
        <div className="Tudo">
            <h1>Selecione:</h1>
            <div className="Icons">

                <div className="boy">
                <Link to="/cadastro-menor"> <img src={boy} alt="Menino"></img></Link>
                    <h3>Menor de idade</h3>
                </div>
                <div className="man">
                <Link to="/cadastro-maior"> <img src={man} alt="Homem"></img></Link> 
                
                    <h3>Maior de idade</h3>
                </div>

            </div>
        </div>
    )
}
export default Aside;