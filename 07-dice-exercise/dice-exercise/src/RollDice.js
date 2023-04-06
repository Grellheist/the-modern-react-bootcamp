import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = {die1: "one", die2: "one"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.setState({
            die1: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            die2: this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        });
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

