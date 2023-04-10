import React, { Component } from 'react';
import Coin from './Coin';
import {choice} from './helpers';

class Flipper extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
            {side: "tails", imgSrc: "http://www.clker.com/cliparts/4/a/2/6/1393621733287511319tails-hi.png"}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {flips: 0, heads: 0, tails: 0, sides: null};
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                flips: st.flips + 1,
                heads: st.heads + (newCoin.side === "heads" ? 1 : 0),
                tails: st.tails + (newCoin.side === "tails" ? 1 : 0),
                currCoin: newCoin
            };
        });
    }
    handleClick() {
        this.flipCoin();
    }
    render() {
        return (
            <div className="Flipper">
                <h1>Let's flip a coin!</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        );
    }
}

export default Flipper;
