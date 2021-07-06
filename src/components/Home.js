import React, { Component } from 'react'
// import Signup from './auth/Signup'
import {Link} from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
                <h1>NEW NEWS</h1>   
                <h3>Status: {this.props.isLoggedIn}</h3>             
                <Link to="/signup" >Sign up</Link>
                <br/>
                <Link to="/login">Log In</Link>               
            </div>
        )
    }
}
export default Home