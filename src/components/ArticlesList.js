import React, { Component } from 'react'

export default class ArticlesList extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        console.log(this.props.token)
        fetch("http://localhost:3000/api/v1/articles", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({articles: data})
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
