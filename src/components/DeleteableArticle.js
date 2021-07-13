import React, { Component } from 'react'
import Article from './Article'
import DeleteConfirm from './DeleteConfirm'

export default class DeleteableArticle extends Component {
    state={
        deleteView: false
    }

    handleToggle = () => {
        this.setState({deleteView: !this.state.deleteView})
    }

    render() {
        return this.state.deleteView ? (
            <DeleteConfirm handleCancel={this.handleToggle}
            article={this.props.article}/>    
        ) : (
            <Article id={this.props.article.id} article={this.props.article} user={this.props.user} addComment={this.props.addComment} handleDelete={this.handleToggle} addToCollection={this.props.addToCollection} />
        )
    }
}
