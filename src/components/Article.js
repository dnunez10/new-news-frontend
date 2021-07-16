import React from 'react'
// import Comments from './Comments'

export default class Article extends React.Component {
    state={
        comment: "",
    }

    alert() {
        return alert("You are now leaving this page")
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addComment(this.state.comment, this.props.id)
        // comment, article_id, current user_id
        // this.props.key 
    }

    // deleteComment = (comment) => {
    //     fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, {
    //         method: "DELETE",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${localStorage.jwt}`
    //           }
    //     })
    //     .then(console.log())
    //     // .then(() => {
    //     //     let comment = this.state.comment
    //     //     let index = comment.indexOf(comment)
    //     //     comment.splice(index, 1)
    //     //     this.setState({comment: comment})
    //     // })
    // }

    render() {
        return (
            <div>
                <br />
                <div className="ui two column doubling stackable grid container">
                    <div className="column">
                        <div className="ui fluid card">
                            <div className="image">
                                <img src={this.props.article.url_to_image} alt="" />
                            </div>
                            <div className="content">
                                <div className="header"><h3>{`"${this.props.article.title}"`}</h3></div>
                                <p>by {`${this.props.article.author}`}</p>
                                <div className="description">{this.props.article.description}</div>
                                <a href={this.props.article.url} onClick={(e) => this.alert(e)}>continue reading</a>
                                <br />

                            </div>
                            <br />
                            {/* <button className="ui button" onClick={() => this.props.addToCollection(this.props.article)}>Add to reading list</button> */}


                            <div className="ui comments">
                                <div className="ui dividing header">
                                    <h3>Reviews</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="text"  name="comment" value={this.state.comment} onChange={this.handleChange}/>
                                        <input className="ui tiny basic button" type="submit" value="Leave a Review"/>
                                    </form></div>
                                <div className="comments">
                                        {this.props.article.comments.map(c => (<div className="comment">"{c.comment}" <i onClick={() => this.props.deleteComment(c, this.props.article.id)} className="times icon"></i></div>))}
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}