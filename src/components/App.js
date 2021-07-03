import React from 'react'
import '../App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './Home'
import Signup from './auth/Signup'
import Dashboard from './Dashboard'


class App extends React.Component  {

  state={
    user: {},
    articles: [],
    comments: [],
    readingLists: [],
    articleReadings: [],
    isLoggedIn: "false",
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000/articles")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  addUser = (user) => {
    let configObj = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
    fetch("http://localhost:3000/registrations", configObj,
      {withCredentials: true})
    .then(res => res.json())
    .then(data => {
      console.log('success', data)
    }) 
    .then(error => {
      console.log("registration error", error)
    })
}

  render(){
    return (
      <div className="App">
      <Switch>

        <Route exact path="/" render={() => <Home isLoggedIn={this.state.isLoggedIn}/>}/>

        <Route exact path="/dashboard" render={() => <Dashboard isLoggedIn={this.state.isLoggedIn}/>}/>

        <Route exact path="/signup" render={() => <Signup addUser={this.props.addUser}/>}/>

        <Route exact path="/login" render={() => <Signup addUser={this.props.addUser}/>}/>

      </Switch>
    </div>
    )
  }
}

export default withRouter(App)
