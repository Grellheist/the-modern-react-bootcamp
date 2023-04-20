import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deckId: "", imgUrl: "", cardsRemaining: 52 };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        const shuffleUrl = "https://deckofcardsapi.com/api/deck/new/shuffle";
        let shuffleResponse = await axios.get(shuffleUrl);
        let shuffleData = shuffleResponse.data;
        console.log(shuffleData.deck_id)
        this.setState({ deckId: shuffleData.deck_id });
    }
    async handleClick() {
        const drawUrl = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
        let drawResponse = await axios.get(drawUrl);
        let drawData = drawResponse.data;
        this.setState({ imgUrl: drawData.cards[0].image, cardsRemaining: drawData.remaining })
        console.log(this.state.cardsRemaining)
    }
    render() {
        return (
            <div>
                <Card image={this.state.imgUrl} />
                {this.state.cardsRemaining > 0
                    ? <button onClick={this.handleClick}>Draw a card</button>
                    : <h2>Sorry you're out of cards kid</h2>}
            </div>
        )
    }

}

export default Deck;
