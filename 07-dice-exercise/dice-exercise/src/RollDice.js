import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {die1: "one", die2: "one"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        const sides = ["one", "two", "three", "four", "five", "six"];
        this.setState({die1: sides[Math.floor(Math.random() * sides.length)], die2: sides[Math.floor(Math.random() * sides.length)]});
    }
    render() {
        return (
            <div>
                <Die side={this.state.die1}/>
                <Die side={this.state.die2}/>
                <button onClick={this.handleClick}>Roll Dice</button>
            </div>
        );
    }
}

export default RollDice;

