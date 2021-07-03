import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/reading_list">My Reading List</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
