import React, { Component } from 'react';
import './Navegador.css'

class Navegador extends Component {
    state = {}
    render() {
        return (
            <nav className="navegador">
                <span className="logo">My Logo</span>
                <ul>
                    <li><a href="url">Perfil</a></li>
                    <li><a href="url">Postagens</a></li>
                </ul>
                <div className="usuario">My Username</div>

            </nav>
        );
    }
}

export default Navegador;