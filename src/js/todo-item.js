import React from 'react';
import $ from 'jquery';

class TodoItem extends React.Component {
  render () {
    let completed = this.props.todo.completed;
    let checked = completed === 'true' || completed === true;
    return (
      <li className="todo">
        <input type="checkbox"
               onChange={this.props.handleCompleted}
               ref="completed"
               checked={checked}/>
        <h3>
          {this.props.todo.text}
        </h3>
        <button onClick={this.props.handleDeleted}
                ref="deleted">&times;</button>
      </li>
    )
  }
}
TodoItem.defaultProps = {
  todo: {
    text: "",
    completed: false
  }
};
export default TodoItem;
