import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    
    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui inverted secondary menu">
                <a href="/dashboard" className="item">
                    Home
                </a>
                {/* <a href="/my_list" className="item">
                    My Reading List
                </a> */}
                <div className="item">
                <a onClick={() => this.props.handleLogout()} href="/">Logout</a>
                </div>
                </div>
            </div>
        )
    }
}
