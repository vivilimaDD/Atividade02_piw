import React, { Component } from 'react';
import './CardUsuario.css'
//import imagem from '../imagens/taylor.png';

class CardUsuario extends Component {
    state = {
        clicks: this.props.like,
    }

    incrementarClick = () => {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    foiClicado = () => {
        this.incrementarClick();
        this.props.clicado(this.props.usuario, this.state.clicks + 1);

    };

    render() {
        return (
            <div className="card">         
                <img className="foto" width="120px" src={this.props.img} alt={"artistas"}/>
                <div className="user">{this.props.usuario}</div>
                <div className="msg">{this.props.mensagem}</div>
                <div onClick={this.foiClicado} className="like"><button>Curtir</button>
                    <div className="contador"> {this.state.clicks}</div>
                </div>
            </div>
        );
    }
}

export default CardUsuario;