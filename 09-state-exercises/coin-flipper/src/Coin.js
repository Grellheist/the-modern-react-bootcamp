import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
        <img src={this.props.info.imgSrc} alt={this.props.info.currCoin} className="Coin"/>
        );
    }
}

export default Coin;
