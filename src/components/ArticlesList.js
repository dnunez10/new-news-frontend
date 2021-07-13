import React, { Component } from 'react'
import DeleteableArticle from './DeleteableArticle'

export default class ArticlesList extends Component {

    // findArticle = () => {
    //     let article = this.props.articles.filter(a => a.id === parseInt(this.props.articleId))
    //     article = article[0]
    //     return this.props.articles.map(a => <DeleteableArticle key={a.id} a={a}/>)
    // }

    randomArticles = (a) => {
        let i = a.length - 1
        for(i; i>0; i--){
            const r = Math.floor(Math.random() * (i + 1))
            const temp = a[i]
            a[i] = a[r]
            a[r] = temp
        }
        return a
    }


    render() {
        let random = this.randomArticles(this.props.articles)
        return (
            <div>
                <div className="ui two column row">
                {random.map(a => (<DeleteableArticle key={a.id} article={a} user={this.props.user} addComment={this.props.addComment} addToCollection={this.props.addToCollection}/>))}
                </div>
            </div>
        )
    }
}
