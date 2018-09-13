import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Main from "./components/Main";
import AuthRoute from "./AuthRoute";
import dbCalls from "./modules/dbCalls";
import './App.css';

export default class App extends Component {
  state = {
    activeUser: {},
    allUsers: [],
    products: [],
    prices: []
}

componentDidMount() {
  let retrievedUser = JSON.parse(sessionStorage.getItem("user"))
  if (retrievedUser !== null) {
      this.setState({
      activeUser: retrievedUser
      })
    } else {
      this.setState({
        activeUser: {}
      })
    }
    dbCalls.getAll("users")
    .then(allUsers => {
        this.setState({
            allUsers: allUsers
        })
    })
}

getActiveUser = () => {
  let stateToChange = JSON.parse(sessionStorage.getItem("user"))
  this.setState({
    activeUser: stateToChange
  })
}

  render() {
    return (
      <React.Fragment>


        <Route exact path="/registration" render={(props) => {
          return <Registration {...props}/>
          }} />


        <Route exact path="/login" render={(props) => {
          return <Login {...props}
          getActiveUser={this.getActiveUser}/>
          }} />


        <AuthRoute path="/" Destination={Main}
        getActiveUser={this.getActiveUser}/>


      </React.Fragment>
    )
  }
}