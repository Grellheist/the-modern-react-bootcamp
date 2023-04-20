import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
                {this.props.image && <img src={this.props.image} alt="this is a card" />}
            </div>
        )
    }
}

export default Card;
