import React, { Component } from 'react'

export default class Form extends Component {
    state={
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.name}</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>
            
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
