import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import person from "../../images/person.png"


export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                User Page
                    {/* <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={person} className="icon--person" alt="person" />
                                {this.props.mainState.user.userName}
                            </h4>
                            <h6 className="card-title">
                            </h6>
                            <a href=""
                                onClick={() => this.props.delete("employees", this.props.mainState.user.id)}
                                    className="card-link">Delete</a>
                        </div>
                        <div className="employeeButton">
                            <button type="button"className="btn btn-success" onClick={() => {
                                this.props.history.push(`/employees/edit/${this.props.mainState.user.id}`)}
                            }>Edit Employee</button>
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}