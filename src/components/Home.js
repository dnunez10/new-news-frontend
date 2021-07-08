import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            // <div className="ui inverted vertical masthead center aligned segment">
            <div class="ui container">
                    <br/>
                {/* <div class="ui text container"> */}
                  <h1 className="title">
                    NEW NEWS
                  </h1>
                  <h2>catch up on today's news</h2>
                {/* </div>     */}
                <br/>
                <br/>
                {/* <div className="ui section divider"></div> */}
                {/* <div className="ui header"> */}
                <div className="middle aligned column">
                <div className="ui big button">
                    <i className="signup icon"></i>
                    <Link to="/signup" >Sign up</Link>
                </div>
                </div>
                <br/>
                <div className="middle aligned column">
                <div className="ui big button">
                    <i className="user icon"></i>
                    <Link to="/login">Log in</Link>
                </div>
                </div>
            </div>
            // </div>
        )
    }
}
export default Home