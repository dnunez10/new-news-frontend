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
            <div>
                <br/>
                <br/>
                <br/>

            <div className="ui raised very padded text container segment">
            <form className="ui center form" onSubmit={this.handleSubmit}>
                <h2>{this.props.name}</h2>
                <div className="required field">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>
                </div>
                <div className="required field">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                </div>
                <button className="ui button" type="submit">Submit</button>
                </form>
        </div></div>
        )
    }
}
