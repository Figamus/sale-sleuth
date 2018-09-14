import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import person from "../../images/person.png"


export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="row user-infos cyruxx">
                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title">{this.props.mainState.activeUser.userName}</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-3 col-lg-3 hidden-xs hidden-sm">
                                        <img class="img-circle" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=100" alt="User Pic" />
                                    </div>
                                    <div class="col-xs-10 col-sm-10 hidden-md hidden-lg">
                                        <strong>Cyruxx</strong><br></br>
                                        <dl>
                                            <dt>User level:</dt>
                                            <dd>Administrator</dd>
                                            <dt>Registered since:</dt>
                                            <dd>11/12/2013</dd>
                                            <dt>Tracked Products</dt>
                                            <dd>15</dd>
                                        </dl>
                                    </div>
                                <div class=" col-md-9 col-lg-9 hidden-xs hidden-sm">
                                    <strong>Cyruxx</strong><br></br>
                                    <table class="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td>User level:</td>
                                            <td>Administrator</td>
                                        </tr>
                                        <tr>
                                            <td>Registered since:</td>
                                            <td>11/12/2013</td>
                                        </tr>
                                        <tr>
                                            <td>Tracked Products</td>
                                            <td>15</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    <div class="panel-footer">
                        <button class="btn btn-sm btn-primary" type="button" data-toggle="tooltip" data-original-title="Send message to user">Button1</button>
                        <span class="pull-right">
                            <button class="btn btn-sm btn-warning" type="button" data-toggle="tooltip" data-original-title="Edit this user">Edit Profile</button>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="tooltip" data-original-title="Remove this user">Delete Account</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
            </React.Fragment>
        )
    }
}