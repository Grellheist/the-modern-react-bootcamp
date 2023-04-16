import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{ task: "heya" }] };
        this.create = this.create.bind(this);
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                removeTodo={() => this.remove(todo.id)}
                task={todo.task}
            />
        ));
        return (
            <div>
                <h1>Todo list</h1>
                <ul>{todos}</ul>
            </div >
        )
    }
}

export default TodoList;
