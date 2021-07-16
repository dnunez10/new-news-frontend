import React from 'react'
import '../App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import Navbar from './Navbar';
import ArticlesList from './ArticlesList';
// import Comments from './Comments';
import Home from './Home'
import Form from './auth/Form';
import ReadingList from './ReadingList';
import Dashboard from './Dashboard'

class App extends React.Component  {

  state={
    user: "", 
    articles: [],
  }

  
  handleLogin = (info) => {
    this.handleAuthFetch(info, 'http://localhost:3000/api/v1/login')
  }

  handleLogout = () => {
    this.props.history.push('/login')
    localStorage.clear()
    this.setState({user: null})
  }
  
  handleSignup = (info) => {
    this.handleAuthFetch(info, 'http://localhost:3000/api/v1/users')
  }
  
  handleAuthFetch = (info, request) => {  
    fetch(request, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(res => res.json())
    // .then(console.log)
    .then(data => {
      this.setState({
        user: data.user
      },
      () => {
        localStorage.setItem('jwt', data.jwt)
        this.props.history.push('/dashboard')})
      })
    }
    
    addToCollection = (article) => {
      fetch("http://localhost:3000/api/v1/article_readings", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({article_id: article.id, reading_list_id: this.state.user.reading_list.id})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(data => this.setState({user: data.user}))
  }

  addComment = (comment, article_id) => {
    // console.log(comment, article_id)
    fetch("http://localhost:3000/api/v1/comments", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`
      },
      body: JSON.stringify({comment: comment, article_id: article_id})
    })
    .then(res => res.json())
    // .then(console.log)
    .then(data => {
      // console.log(data)
      if(this.state.articles.id === data.comment.article_id){
        this.setState({
          articles: [...this.state.articles, data.comment]
        })
      }
      // check article_id matches data.comment.article_id
      // if they match add the data.comment to article comments array
    })
  }
  
  deleteComment = (comment) => {
    fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.jwt}`
          }
    })
    .then(res => res.json())
}


  componentDidMount() {
    if (localStorage.jwt) {
      // console.log(localStorage.jwt)
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${localStorage.jwt}`
        }
      })
      .then(res => res.json())
      // .then(console.log)
      .then(data => this.setState({user: data.user}))
    }
    this.fetchArticles()
  }
    
  fetchArticles(){
    fetch("http://localhost:3000/api/v1/articles", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({articles: data})
    })
  }

 
  
  handleDashboard = () => <Dashboard user={this.state.user} />

  handleAllArticles = () => <ArticlesList user={this.state.user} articles={this.state.articles} addComment={this.addComment} deleteComment={this.deleteComment} addToCollection={this.addToCollection} />

  handleUserArticles = () => <ReadingList articles={this.state.user.articles}/>

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form name="Login Form" handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Form name="Signup Form" handleSubmit={this.handleSignup} />
    }
  }


  
  render(){
    // console.log(this.state.articles)
    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout}/>

      <Switch>

        <Route path="/" exact component={Home}/>

        <Route path="/dashboard" exact component={this.handleDashboard} />

        <Route path="/login" exact component={this.renderForm} />

        <Route path="/signup" exact component={this.renderForm} />

        <Route path="/articles" exact component={this.handleAllArticles} />
        
        <Route path="/my_list" exact component={this.handleUserArticles} />

      </Switch>
    </div>
    )
  }
}

export default withRouter(App)
