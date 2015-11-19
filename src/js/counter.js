import React from 'react';

class Counter extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.count}</span> do's!
      </div>
    )
  }
}

export default Counter;
