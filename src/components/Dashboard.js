import React from 'react'

export default function Dashboard(props) {
    return (
        <div>
            <h1>DASHBOARD</h1>
            <h3>Status: {props.isLoggedIn}</h3>
        </div>
    )
}
