import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Main from "./components/Main";
import User from "./components/user/User";
import Tracking from "./components/tracking/Tracking";
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

  allFunctions = {
    getActiveUser: () => {
    let stateToChange = JSON.parse(sessionStorage.getItem("user"))
    this.setState({
      activeUser: stateToChange
      })
    }
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
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
        <AuthRoute path="/user" Destination={User}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
        <AuthRoute path="/tracking" Destination={Tracking}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
      </React.Fragment>
    )
  }
}