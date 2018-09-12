import React from "react"
import { Route } from "react-router-dom"
import Login from "./components/login/Login";

const isAuthenticated = () =>
    sessionStorage.getItem("user") !== null

const AuthRoute = ({ path, Destination}) =>
    <Route exact path={path} render={props => {
        if (isAuthenticated()) {
            return <Destination {...props} />
        } else {
            return <Login {...props}/>
        }
    }} />


export default AuthRoute