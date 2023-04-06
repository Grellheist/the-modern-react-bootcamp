import React, { Component } from 'react';

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 1 };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        this.setState({ number: randomNumber });

    }
    render() {
        return (
        <div>
            <h1>Number: {this.state.number}</h1>
            {this.state.number === 7 
                ? <h2>YOU WIN!</h2>
                : <button onClick={this.handleClick}>Click Me</button>
            }
        </div>
        );
    }
}

export default Number;
