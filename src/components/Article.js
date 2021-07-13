import React from 'react'
// import Comments from './Comments'

export default class Article extends React.Component {
    state={
        comment: ""
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

    comment = () => {
        console.log(this.props.article)
        this.props.article.comments.map(c => ( 
            <div className="comment">{c.comment}</div>
        ))
    }

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
                            <button className="ui button" onClick={() => this.props.addToCollection(this.props.article)}>Add to reading list</button>


                            <div className="ui comments">
                                <h3 className="ui dividing header">Comments</h3>
                                <div className="comments">
                                        {this.props.article.comments.map(c => (
                                        <div className="comment">{c.comment} {c.user_id.name}</div>))}
                                            
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="text"  name="comment" value={this.state.comment} onChange={this.handleChange}/>
                                        <input type="submit" value="Submit"/>
                                    </form>
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