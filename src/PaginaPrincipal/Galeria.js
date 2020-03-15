import React, { Component } from 'react';
import CardUsuario from './CardUsuario';
import './Galeria.css';
import taylor from '../imagens/taylor.png';
import selena from '../imagens/selena.png';
import camila from '../imagens/camila.png';
// import imagem from '../assets/pic.png; 

class Galeria extends Component {
    state = {
        user: [
            {
                id: 1,
                img: taylor,
                usuario: "Taylor Swift",
                mensagem: "Killing me slow, out the window I'm always waiting for you to be waiting below",
                like: 21,
            },
            {
                id: 2,
                img: selena,
                usuario: "Selena Gomez",
                mensagem: "I'm so sick of that same old love, feels like I've blown apart",
                like: 18,
            },
            {
                id: 3,
                img: camila,
                usuario: "Camila Cabello",
                mensagem: "I love it when you call me señorita I wish I could pretend I didn't need ya",
                like: 19,
            },
            {
                id: 4,
                img: taylor,
                usuario: "Taylor Swift",
                mensagem: "Killing me slow, out the window I'm always waiting for you to be waiting below",
                like: 21,
            },
            {
                id: 5,
                img: selena,
                usuario: "Selena Gomez",
                mensagem: "I'm so sick of that same old love, feels like I've blown apart",
                like: 18,
            },
            {
                id: 6,
                img: camila,
                usuario: "Camila Cabello",
                mensagem: "I love it when you call me señorita I wish I could pretend I didn't need ya",
                like: 19,
            },

        ]
    }

    recebiClick = () => {
        console.log("Recebeu Like");

    }

    render() {
        return (
            <div>
                <div className="galeria">
                    <div className="central">
                        {this.state.user.map(
                            (user) => (<CardUsuario
                                key={user.id}
                                img={user.img}
                                id={user.id}
                                usuario={user.usuario}
                                mensagem={user.mensagem}
                                like={user.like}
                                foiClicado={this.recebiClick}>
                            </CardUsuario>)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Galeria;