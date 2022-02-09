import React, { Component } from 'react';

class Habit extends Component {

  /*
  Habit component is the smallest unit for a habit
  so It doesn't need a state inside!

  state = {
    count: 0,
  };
  */

  handleIncrement = (habit) => {
    this.props.onIncrement(this.props.habit)
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(this.props.habit)
  };

  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    const { name, count } = this.props.habit;
    const { onIncrement, onDecrement, onDelete, habit } = this.props;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <button className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          X
        </button>
      </li>
    );
  }
}

export default Habit;
