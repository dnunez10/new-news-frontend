import React, { Component } from 'react'
import Signup from './auth/Signup'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>NEW NEWS</h1>
                <Signup addUser={this.props.addUser}/>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}
