import React, { Component } from "react";
import axios from "axios";

const JOKE_URL = "https://icanhazdadjoke.com/"
const CONFIG = {
    headers: {
        "Accept": "application/json"
    }
}

class Joke extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }
    constructor(props) {
        super(props);
        this.state = { jokes: [] };
    }
    async componentDidMount() {
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
            let response = await axios.get(JOKE_URL, CONFIG);
            jokes.push(response.data.joke);
        }
        this.setState({ jokes: jokes })
    }
    render() {
        return (
            <div>{this.state.jokes}</div>
        )
    }

}

export default Joke;
