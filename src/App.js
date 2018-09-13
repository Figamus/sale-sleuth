import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Main from "./components/Main";
import AuthRoute from "./AuthRoute";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/registration" render={(props) => {
          return <Registration {...props}/>
          }} />
        <Route exact path="/login" render={(props) => {
          return <Login {...props}/>
          }} />
        <AuthRoute path="/" Destination={Main} 
        {...this.Route}/>
      </React.Fragment>
    )
  }
}