import React from "react"
import { Route } from "react-router-dom"
import Login from "./components/login/Login";

const isAuthenticated = () =>
    sessionStorage.getItem("user") !== null

const AuthRoute = ({ path, Destination, getActiveUser}) =>
    <Route exact path={path} render={props => {
        if (isAuthenticated()) {
            return <Destination {...props}
            getActiveUser={getActiveUser} />
        } else {
            return <Login {...props}
            getActiveUser={getActiveUser}/>
        }
    }} />


export default AuthRoute