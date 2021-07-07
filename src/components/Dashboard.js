import React from 'react'

export default function Dashboard(props) {
    return (
        <div>
            <h1>DASHBOARD</h1>
            
            <h3>Welcome {props.user.username}!</h3>
        </div>
    )
}
