import React, { Component } from "react";
import dbCalls from "../../modules/dbCalls";
import "bootstrap/dist/css/bootstrap.min.css"

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
                    this.props.allFunctions.getActiveUser();
                    alert("Succefully Logged In.")
                    this.props.history.push("/");
                } else {
                    alert("Username or Password is incorrect. If you do not have an account, please register.")
                }
            })
    }

    handleRegistration = (e) => {
        e.preventDefault();
        this.props.history.push("/registration")
    }

    render() {
        return (
            <div className="row">
                <div className="card bg-dark mx-auto">
                    <form>
                        <h1 className="h3 mb-3 font-weight-normal mx-auto">
                            Please Sign In
                        </h1>
                        <fieldset className="mx-auto">
                            <label htmlFor="inputEmail">User Name: </label>
                            <input onChange={this.handleFieldChange} type="text" id="userName" placeholder="User Name" required="" autoFocus="" />
                        </fieldset>
                        <fieldset className="mx-auto">
                            <label htmlFor="inputPassword">Password: </label>
                            <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" /></fieldset>
                        <fieldset className="mx-auto">
                            <label>Remember Me</label>
                            <input type="checkbox" onChange={this.checkbox}></input>
                        </fieldset>
                        <fieldset className="mx-auto">
                            <button type="submit" onClick={this.handleLogin}>Sign in</button>
                        </fieldset>
                        <fieldset className="mx-auto">
                            <button type="submit" onClick={this.handleRegistration}>Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}
