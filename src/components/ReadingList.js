import React from 'react'
import {Link} from 'react-router-dom'

export default class ReadingList extends React.Component {
    render() {
        console.log(this.props.articles)
        return (
            <div>
                <h1 className="ui header">Reading List</h1>
                <br/>
                <div className="ui four cards">
                <div className="card">                
                    
                </div>
                </div>
                <Link to="/articles"><h3>Add More Articles</h3></Link>
            </div>
        )
    }
}
