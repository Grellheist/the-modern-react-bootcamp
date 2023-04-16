import React, { Component } from "react";

class Todo extends Component {
    render() {
        return (
            <div>
                <li>{this.props.task}</li>
                <button>X</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default Todo;
