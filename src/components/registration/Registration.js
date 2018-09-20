import React, { Component } from "react";
import dbCalls from "../../modules/dbCalls"

export default class Registration extends Component {
    state = {
        userName: "",
        email: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegistration = (e) => {
        e.preventDefault();
        let user = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        dbCalls.post("users", user)
            .then(() => {
                alert("You have succefully registered. Please log In");
                this.props.history.push("/login")
            })
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.history.push("/login")
    }

    render() {
        return (
            <div className="row">
                <div className="card bg-dark mx-auto">
                    <form>
                        <h1 className="h3 mb-3 font-weight-normal">
                            Please Register
                </h1>
                        <fieldset>
                            <label htmlFor="inputuserName">User Name: </label>
                            <input onChange={this.handleFieldChange} type="text" id="userName" placeholder="User Name" required="" autoFocus="" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputEmail">E-mail: </label>
                            <input onChange={this.handleFieldChange} type="email" id="email" placeholder="E-mail" required="" autoFocus="" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputPassword">Password: </label>
                            <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" />
                        </fieldset>
                        <fieldset>
                            <button type="submit" onClick={this.handleRegistration}>Register</button>
                        </fieldset>
                        <fieldset>
                            <button type="submit" onClick={this.handleLogin}>Return to Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}