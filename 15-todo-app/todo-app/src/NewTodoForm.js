import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.taget.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const newTodo = { ...this.state, id: uuidv4() }
    }
    render() {
        return (
            <h1>hi</h1>
        )
    }
}

export default NewTodoForm
