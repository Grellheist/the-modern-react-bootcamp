import React, { Component } from 'react';
import "./Die.css"

class Die extends Component {
    render() {
        return (
        <i className={`Die fas fa-dice-${this.props.side} ${this.props.rolling ? "shaking" : ""}`}></i>
        );
    }
}

export default Die;
