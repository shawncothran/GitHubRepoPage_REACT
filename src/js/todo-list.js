import React from 'react';
import $ from 'jquery';

import TodoItem from './todo-item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleCompleted = this.handleCompleted.bind(this);
  }
  handleCompleted(id, event) {
    let completed = event.target.checked;
    let options = {
      url: 'http://tiny-starburst.herokuapp.com/collections/todos/' + id,
      method: 'PUT',
      data: {
        completed: completed
      }
    };
    $.ajax(options);
    let data = {
      _id: id,
      completed: completed
    };
    this.props.updateTodo(data);
  }
  render() {
    if (!this.props.todos.length && !this.props.hasLoaded) {
      return <div>loading...</div>
    }
    let todos = this.props.todos.map(todo => {
      return <TodoItem key = {todo._id}
      todo = {todo}
      handleCompleted = {this.handleCompleted.bind(this, todo._id)}
      />
    })
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList;
