import React from "react"
import { Route } from "react-router-dom"

const isAuthenticated = () =>
    sessionStorage.getItem("user") !== null

const AuthRoute = ({ path, Destination}) =>
    <Route exact path={path} render={props => {
        if (isAuthenticated()) {
            return <Destination {...props} />
        } else {
            return <Main {...props}/>
        }
    }} />


export default AuthRoute