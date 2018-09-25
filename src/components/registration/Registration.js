import React, { Component } from "react";
import dbCalls from "../../modules/dbCalls"
import "./Registration.css"

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
            <div className="login-page ">
                <div className="form bg-dark" id="form">
                <h1>Sale Sleuth</h1>
                    <form className="register-form">
                        <input type="text" id="userName" onChange={this.handleFieldChange} placeholder="User Name" />
                        <input type="text"  id="email" onChange={this.handleFieldChange} placeholder="E-mail Address" />
                        <input type="password"  id="password" onChange={this.handleFieldChange} placeholder="Password" />
                        <button type="submit" onClick={this.handleRegistration}>create</button>
                        <p className="message">Already registered? <a onClick={this.handleLogin} href="">Sign In</a></p>
                    </form>
                </div>
            </div>
        )
    }
}

