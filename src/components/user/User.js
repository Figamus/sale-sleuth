import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./User.css"
import person from "../../images/person.png"


export default class User extends Component {
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
                                        <table className="table table-user-information">
                                            <tbody>
                                                <tr>
                                                    <td>E-mail:</td>
                                                    <td>{this.props.mainState.activeUser.email}</td>
                                                </tr>
                                                <tr>
                                                    <td>Registered since:</td>
                                                    <td>11/12/2013</td>
                                                </tr>
                                                <tr>
                                                    <td>Tracked Products</td>
                                                    <td>{this.props.mainState.userTrackedProduct.length}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <span className="pull-right">
                                    <button className="btn btn-sm btn-warning" type="button" onClick={() => this.props.history.push(`/user/edit`)}>Edit Profile</button>
                                    <button className="btn btn-sm btn-danger" type="button">Delete Account</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}