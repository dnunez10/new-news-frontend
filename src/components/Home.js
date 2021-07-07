// import React from 'react'

// export default function Home(props) {
//     // console.log(props)
//     return (
//         <div className="item">
//             Welcome {props.username}!
//         </div>
//     )
// }

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
                <h1>NEW NEWS</h1>         
                <Link to="/signup" >Sign up</Link>
                <br/>
                <Link to="/login">Log in</Link>
            </div>
        )
    }
}
export default Home