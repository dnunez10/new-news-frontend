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
            <Article article={this.props.article} handleDelete={this.handleToggle} addToCollection={this.props.addToCollection} />
        )
    }
}
