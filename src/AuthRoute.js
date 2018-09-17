import React from "react"
import { Route } from "react-router-dom"
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

const isAuthenticated = () =>
    sessionStorage.getItem("user") !== null

const AuthRoute = ({ path, Destination, mainState, allFunctions}) =>
    <Route exact path={path} render={props => {
        if (isAuthenticated()) {
            return <div>
            <Navbar {...props}/>
            <Destination {...props}
            mainState={mainState}
            allFunctions={allFunctions} />
            </div>
        } else {
            return <Login {...props}
            allFunctions={allFunctions}/>
        }
    }} />


export default AuthRoute