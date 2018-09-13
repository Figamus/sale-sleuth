import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import person from "../../images/person"


export default class User extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={person} className="icon--person" alt="person" />
                            {employee.name}
                        </h4>
                        <h6 className="card-title">
                        </h6>
                        <a href=""
                            onClick={() => this.props.delete("employees", employee.id)
                                .then(() => this.props.history.push("/employees"))}
                                className="card-link">Delete</a>
                    </div>
                    <div className="employeeButton">
                        <button type="button"className="btn btn-success" onClick={() => {
                            this.props.history.push(`/employees/edit/${employee.id}`)}
                        }>Edit Employee</button>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}