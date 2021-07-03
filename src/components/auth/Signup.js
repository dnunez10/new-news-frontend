import React, { Component } from 'react'

export default class Signup extends Component {

    state={
        user: [],
        username: "",
        password: "",
        password_confirmation: "",
        registrationErrors: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state)
        
    }

    handleChange = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h3>Signup Here!</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>

                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>

                    <input type="text" name="password_confirmation" placeholder="Type Password Again" value={this.state.password_confirmation} onChange={this.handleChange} required/>

                    <button type="submit">Sign me up!</button>
                </form>
                
            </div>
        )
    }
}
