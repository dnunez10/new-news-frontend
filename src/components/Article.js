import React from 'react'
import { Link } from 'react-router-dom'

export default function Article(props) {
    console.log(props)

    return (
        <div>
            <br/>
            <div className="ui two column doubling stackable grid container">
                <div className="column">
                <div className="ui fluid card">
                {/* <Link to={`articles/${props.article.id}`}></Link> */}
                <div className="image">
                <img src={props.article.url_to_image} alt=""/>
                </div>
                <div className="content">
                <div className="header"><h3>{`"${props.article.title}"`}</h3></div>
                <p>by {`${props.article.author}`}</p>
                <div className="description">{props.article.description}</div>
                <Link to={`articles/${props.article.id}`}>continue reading</Link>
                <br/>
                <div className="source">{props.article.source.name}</div>
                </div>
                <br/>            
                {/* <div className="content">{props.article.content}</div> */}
                {/* <div onClick={props.handleDelete}></div> */}
                <button className="fluid ui button" onClick={() => props.addToCollection(props.article)}>Add to reading list</button>
                </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

// #282c34 - color background?