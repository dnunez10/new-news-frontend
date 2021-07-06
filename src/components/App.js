import React from 'react'
import '../App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './Home'
import Login from './auth/Login';
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

  componentDidMount(){
    this.checkLogin()
  }

  fetchArticles(){
    fetch("http://localhost:3000/articles")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  handleLogin = (data) =>{
    this.setState({
      isLoggedIn: "logged in",
      user: data.user
    })
  }
  
  handleAuth = (data) => {
    this.handleLogin(data)
    this.props.history.push("/dashboard")
  }

  
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
      if(data.status === 'created'){
        this.handleAuth(data)
      }
    }) 
    .catch(error => {
      console.log("registration error", error)
    })
  }
  
  login = (user) => {
    let configObj = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
    fetch("http://localhost:3000/sessions", configObj,
    {withCredentials: true})
    .then(res => res.json())
    .then(data => {
      if(data.logged_in === true){
        this.handleAuth(data)
      }
    }) 
    .catch(error => {
      console.log("login error", error)
    })
  }
  
  checkLogin(){
    fetch("http://localhost:3000/logged_in", {withCredentials: true})
    .then(res => res.json())
    .then(data => {
      console.log("logged in?", data)
    })
    .catch(error => {
      console.log("login error", error)
    })
  }

  render(){
    return (
      <div className="App">
      <Switch>

        <Route exact path="/" render={() => <Home isLoggedIn={this.state.isLoggedIn}/>}/>

        <Route exact path="/dashboard" render={() => <Dashboard isLoggedIn={this.state.isLoggedIn}/>}/>

        <Route exact path="/signup" render={() => <Signup addUser={this.addUser}/>}/>

        <Route exact path="/login" render={() => <Login login={this.login}/>}/>

      </Switch>
    </div>
    )
  }
}

export default withRouter(App)
