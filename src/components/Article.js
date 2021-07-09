import React from 'react'

export default class Article extends React.Component {    
    alert(){
        return alert("You are now leaving this page")
    }

    // randomArticles = (a) => {
    //     let i = a.length - 1
    //     for(i=0; i>0; i--){
    //         const r = Math.floor(Math.random() * (i + 1))
    //         const temp = a[i]
    //         a[i] = a[r]
    //         a[r] = temp
    //     }
    //     return a
    // }

    render(){
        // const random = this.randomArticles(this.props.article)
    return (
        <div>
            {/* {random} */}
            <br/>
            <div className="ui two column doubling stackable grid container">
                <div className="column">
                <div className="ui fluid card">
                <div className="image">
                <img src={this.props.article.url_to_image} alt=""/>
                </div>
                <div className="content">
                <div className="header"><h3>{`"${this.props.article.title}"`}</h3></div>
                <p>by {`${this.props.article.author}`}</p>
                <div className="description">{this.props.article.description}</div>
                <a href={this.props.article.url} onClick={(e) => this.alert(e)}>continue reading</a>
                <br/>
                
                {/* <div className="source">{this.props.article.source.name}</div> */}
                </div>
                <br/>            
                <button className="ui button" onClick={() => this.props.addToCollection(this.props.article)}>Add to reading list</button>
                <div className="ui divider">
                <div className="comments">
                    {this.props.comments}
                </div>
                </div>
                </div>
                </div>
            </div>
            <br/>
        </div>
    )
}}

// #282c34 - color background?