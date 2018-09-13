import React, { Component } from "react";
import dbCalls from "../../modules/dbCalls";

export default class Login extends Component {
    state = {
        userName: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault();
        dbCalls.getAll("users")
        .then(users => {
            let userMatched = users.find(user => user.userName === this.state.userName && user.password === this.state.password)
                if (userMatched) {
                    sessionStorage.setItem("user", JSON.stringify(userMatched));
                    this.props.getActiveUser();
                    alert("You have succefully logged in.");
                    this.props.history.push("/");
                } else {
                alert("Username or Password is incorrect. If you do not have an account, please register.")
                }
            })
        }

    handleRegistration = (e) => {
        e.preventDefault();
        this.props.history.push("/registration")}

    render() {
        return (
            <form>
                <h1 className="h3 mb-3 font-weight-normal">
                    Please Sign In
                </h1>
                <fieldset>
                    <label htmlFor="inputEmail">User Name: </label>
                    <input onChange={this.handleFieldChange} type="text" id="userName" placeholder="User Name" required="" autoFocus="" />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword">Password: </label>
                    <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" /></fieldset>
                <fieldset>
                    <label>Remember Me</label>
                    <input type="checkbox" onChange={this.checkbox}></input>
                </fieldset>
                <fieldset>
                    <button type="submit" onClick={this.handleLogin}>Sign in</button>
                </fieldset>
                <fieldset>
                    <button type="submit" onClick={this.handleRegistration}>Register</button>
                </fieldset>
            </form>
        )
    }
}
