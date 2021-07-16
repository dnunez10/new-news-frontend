import React from 'react'

export default function Article(props) {
    return (
        <div>
            <h1>Are you sure you want to remove {props.article.comments}?</h1>
            <button onClick={props.handleCancel}> No </button>
            <button>Delete</button>
        </div>
    )
}
