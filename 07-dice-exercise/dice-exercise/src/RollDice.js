import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = {die1: "one", die2: "one", rolling: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.setState({
            die1: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            die2: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            rolling: true
        });
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die side={this.state.die1} rolling={this.state.rolling}/>
                    <Die side={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>
                    {this.state.rolling ? <p>Rolling...</p> : <p>Roll Dice</p>}
                </button>
            </div>
        );
    }
}

export default RollDice;

