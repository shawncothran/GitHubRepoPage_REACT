import React from 'react';
import $ from 'jquery';

class Add extends React.Component {
  constructor(props){
    super(props);
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(event){
    let key = event.which;
    let ENTER_KEY = 13;
    if (key === ENTER_KEY) {
      let task = this.refs.task.value;
      this.saveTask(task);
      this.refs.task.value = '';
    }
  }
  saveTask(task) {
    let options = {
      method: 'POST',
      data: {
        text: task,
        completed: false
      }
    }
    $.ajax('http://tiny-starburst.herokuapp.com/collections/todos', options)
     .then(response => {
       this.props.handleAdd(response)
     });
  }
  render () {
    return (
      <input type="text"
             placeholder="See what you can do..."
             onKeyPress={this.handleKeyPress}
             ref="task"
      />
    )
  }
}

export default Add;
