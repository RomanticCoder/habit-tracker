import React, { Component } from 'react';
import '../app.css';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <span>😋</span>
                <h1>Habit Traker</h1>
                <span className='count'>{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;
