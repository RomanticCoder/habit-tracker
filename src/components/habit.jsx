import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  render() {
    const { name, count } = this.props.habit;
    const {habit, onIncrement, onDecrement, onDelete} = this.props
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={ () => {onIncrement(habit)}}
        >
          +
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={ () => {onDecrement(habit)}}
        >
          -
        </button>
        <button className="habit-button habit-delete"
          onClick={ () => {onDelete(habit)}}
          >
          X
        </button>
      </li>
    );
  }
}

export default Habit;
