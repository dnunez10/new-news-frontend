import React, { Component } from 'react'


export default class Comments extends Component {
    render() {
        return (
            <div className="ui threaded comments">
                <h3 className="ui dividing header">Comments</h3>
                <div className="comment">
                    <div className="content"></div>
                    <div className="user">
                        {this.props.user.name}
                    </div>
                    <div className="metadata">
                        <span className="date"></span>
                    </div>
                    <div className="text">
                        {this.props.user.comment}
                    </div>
                    <div className="actions">
                        <button className="reply">Reply</button>
                    </div>
                </div>
            </div>
        )
    }
}
