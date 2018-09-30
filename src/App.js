import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Main from "./components/Main";
import User from "./components/user/User";
import UserEdit from "./components/user/UserEdit";
import Tracking from "./components/tracking/Tracking";
import Search from "./components/search/Search";
import TrackingDetails from "./components/tracking/TrackingDetails";
import AuthRoute from "./AuthRoute";
import dbCalls from "./modules/dbCalls";
import './App.css';

export default class App extends Component {
  state = {
    activeUser: {},
    allUsers: [],
    userTrackedProduct: [],
    priceHistory: [],
    products: []
  }
  // events => {newState.events = events}
//   componentDidMount() {
// }

  allFunctions = {
    getActiveUser: () => {
    let stateToChange = JSON.parse(sessionStorage.getItem("user"))
    this.setState({
      activeUser: stateToChange
      })
    },
    put: (resource, newObject, id) => {
      dbCalls.put(resource, newObject, id)
    },
    post: (resource, newObject) => {
    dbCalls.post(resource, newObject)
    .then(() => dbCalls.getAll(resource))
    .then(response => {
      console.log(response)
      let counter = response.filter((tp) => tp.userID === this.state.activeUser.id)
      this.setState({
        [resource]: counter
      })
    })
    },
    getProduct: (id) => {
      dbCalls.getProduct(id)
      .then((r)=> {return r})
    },
    delete: (resource, id) => {
    dbCalls.delete(resource, id)
    .then(() => dbCalls.getAll(resource))
    .then(response => {
        let counter = response.filter((tp) => tp.userID === this.state.activeUser.id)
        this.setState({[resource]: counter})
      })
    },
    updateMainState: () => {
      const newState = {};
      let retrievedUser = JSON.parse(sessionStorage.getItem("user"))
      if (retrievedUser) {
        newState.activeUser = retrievedUser;
        dbCalls.getAll("users")
        .then(allUsers => {
          newState.allUsers = allUsers
        })
        .then(() => dbCalls.getAll("userTrackedProduct"))
        .then(userTrackedProduct => {
          let counter = userTrackedProduct.filter((tp) => tp.userID === retrievedUser.id)
          newState.userTrackedProduct = counter
        })
        .then(() => dbCalls.getAll("priceHistory"))
        .then(priceHistory => {
            newState.priceHistory = priceHistory
        })
        .then(() => dbCalls.getAllProducts())
        .then(products => {
            newState.products = products
        })
        .then(() => {
          this.setState(newState) 
        })
    }
    }
}

  render() {
    return (
      <React.Fragment>
        <Route exact path="/registration" render={(props) => {
          return <Registration {...props}
          allFunctions={this.allFunctions}/>
          }} />
        <Route exact path="/login" render={(props) => {
          return <Login {...props}
          allFunctions={this.allFunctions}/>
          }} />
        <AuthRoute exact path="/" Destination={Main}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
        <AuthRoute exact path="/user" Destination={User}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
        <AuthRoute exact path="/user/edit" Destination={UserEdit}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
        <AuthRoute exact path="/tracking" Destination={Tracking}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
        <AuthRoute exact path="/search" Destination={Search}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
        <AuthRoute exact path="/tracking/details/:itemId(\d+)" Destination={TrackingDetails}
        mainState = {this.state}
        allFunctions={this.allFunctions}/>
      </React.Fragment>
    )
  }
}