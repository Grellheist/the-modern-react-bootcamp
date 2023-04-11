import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Hangman />
                <button id='reset' onClick={() => window.location.reload(false)}>Reset</button>
            </div>
        );
    }
}

export default App;
