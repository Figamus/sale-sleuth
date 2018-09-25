import React, { Component } from "react";
import dbCalls from "../../modules/dbCalls";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"

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
            <div className="login-page ">
                <div className="form bg-dark" id="form">
                <h1>Sale Sleuth</h1>
                    <form className="login-form ">
                        <input type="text" id="userName" onChange={this.handleFieldChange} placeholder="User Name" />
                        <input type="password" id="password" onChange={this.handleFieldChange} placeholder="Password" />
                        <button onClick={this.handleLogin}>login</button>
                        <p className="message">Not registered? <a onClick={this.handleRegistration} href="">Create an account</a></p>
                    </form>
                </div>
            </div>
        )
    }
}
