import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./User.css"
import person from "../../images/person.png"

export default class UserEdit extends Component {
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

    handleUpdate = (e) => {
        let user = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        this.props.allFunctions.put("users", user, this.props.mainState.activeUser.id);
        alert("Please log back in");
        sessionStorage.removeItem("user");
        this.props.history.push("/");
    }
    render() {
        return (
            <React.Fragment>
                <div className="row mainRow text-light">
                    <div className="col-6 mx-auto bg-dark rounded shadow">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">{this.props.mainState.activeUser.userName}</h3>
                            </div>
                            <div className="panel-body mx-auto">
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <img className="profile-image" src={person} alt="User Pic" />
                                    </div>
                                    <div className=" col-9 mx-auto">
                                        <strong>{this.props.mainState.activeUser.userName}</strong><br></br>
                                        <div class="row align-items-center">
                                            <div class="col-4">
                                                <label>Change Username</label>
                                                <input id="userName" defaultValue={this.props.mainState.activeUser.userName} onChange={this.handleFieldChange}></input>
                                            </div>
                                            <div class="col-4">
                                            <   label>Change E-mail</label>
                                            <input id="email" defaultValue={this.props.mainState.activeUser.email} onChange={this.handleFieldChange}></input>
                                            </div>
                                            <div class="col-4">
                                                <label>Change Password</label>
                                                <input id="password" onChange={this.handleFieldChange}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <span className="pull-right">
                                    <button className="btn btn-sm btn-success" type="button" onClick={() => this.handleUpdate()}>Save Changes</button>
                                    <button className="btn btn-sm btn-primary" type="button" onClick={() => this.props.history.push(`/user`)}>Cancel Changes</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}