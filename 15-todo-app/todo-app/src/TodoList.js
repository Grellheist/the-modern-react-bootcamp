import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
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
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
    }
    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                removeTodo={this.remove}
                task={todo.task}
                updateTodo={this.update}
            />
        ));
        return (
            <div>
                <h1>Todo list</h1>
                <NewTodoForm createTodo={this.create} />
                <ul>{todos}</ul>
            </div >
        )
    }
}

export default TodoList;
