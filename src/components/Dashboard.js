import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard(props) {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            
            <div className="ui raised very padded text container segment">
            <h1 className="ui header">DASHBOARD</h1>
            <h3 className="ui header">Welcome {props.user.username}!</h3>
            <br/>
            <Link to="/articles"><h2>View All Articles</h2></Link>
            <br/>
            <Link to="/my_list"><h2>My Reading List</h2></Link>
            <div>{props.user.reading_list}</div>
            
            </div>
        </div>
    )
}
