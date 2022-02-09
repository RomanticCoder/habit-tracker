import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = e => {
        e.preventDefault()
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        this.inputRef.current.value = '';
    }

    handleAdd = (name) => {
        this.props.onAdd(name)
    }

    render() {
        return (
            <form className='add-form' onSubmit={this.onSubmit}>
                <input ref={this.inputRef} placeholder='habit' type="text" className='add-input' />
                <button className="add-button">ADD</button>
            </form>
        );
    }
}

export default HabitAddForm;
