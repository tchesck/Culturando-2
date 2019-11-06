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
                    <a href=""><img src={boy} alt="Menino"></img></a>
                    <h3>Menor de idade</h3>
                </div>
                <div className="man">
                <a href="http://localhost:3006/cadastro-maior"><img src={man} alt="Homem"></img></a>
                    <h3>Maior de idade</h3>
                </div>

            </div>
        </div>
    )
}
export default Aside;