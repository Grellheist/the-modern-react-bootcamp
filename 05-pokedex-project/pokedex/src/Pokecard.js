import React, { Component } from 'react';
import "./Pokecard.css";

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        const imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <p>Type: {this.props.type}</p>
                <p>EXP: {this.props.base_experience}</p>
            </div>
        ) 
    }
}

export default Pokecard;
