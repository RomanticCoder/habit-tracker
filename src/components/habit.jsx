import React, { Component} from 'react'

class Habit extends Component {
    // state: member variable in the habit component
    state = {
        count: 0,
    }

    handleIncrement = (event) => {
        // increase the count in state object, then update the state
        this.setState({count: this.state.count + 1})
    }

    handleDecrement = (event) => {
        const count = this.state.count - 1
        this.setState({count: count < 0 ? 0 : count})
    }


    render(){
        return (
            <li className='habit'>
                <span className='habit-name'>Reading</span>
                <span className='habit-count'>{this.state.count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncrement}>+</button>
                <button className='habit-button habit-decrease' onClick={this.handleDecrement}>-</button>
                <button className='habit-button habit-delete'>delete</button>
            </li>
        )
    }
}

export default Habit;