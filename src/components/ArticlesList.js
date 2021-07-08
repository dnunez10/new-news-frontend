import React, { Component } from 'react'
import DeleteableArticle from './DeleteableArticle'

export default class ArticlesList extends Component {

    findArticle = () => {
        let article = this.props.articles.filter(a => a.id === parseInt(this.props.articleId))
        article = article[0]
        return this.props.articles.map(a => <DeleteableArticle key={a.id} a={a}/>)
    }

    render() {
        return (
            // <div>
                <div className="ui two column row">
                {this.props.articles.map(a => (<DeleteableArticle key={a.id} article={a} addToCollection={this.props.addToCollection}/>))}
                {this.props.articleId ? this.findArticle() : this.props.articles.title}
                </div>
            // </div>
        )
    }
}
