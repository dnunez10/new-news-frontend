import React, { Component } from 'react'

export default class Login extends Component {

    state={
        username: "",
        password: "",
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        
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
                <h3>Login Here!</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>

                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>

                    <button type="submit">Login!</button>
                </form>
                
            </div>
        )
    }
}
