import React from 'react'
import '../App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'


class App extends React.Component  {

  state={
    users: {},
    articles: [],
    comments: [],
    readingLists: [],
    articleReadings: [],
    isLoggedIn: false,
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
}

  render(){
    return (
      <div className="App">
      <Switch>

        <Route exact path="/" render={() => <Home addUser={this.addUser}/>}/>

        <Route exact path="/dashboard" render={() => <Dashboard />}/>


      </Switch>
    </div>
    )
  }
}

export default withRouter(App)
