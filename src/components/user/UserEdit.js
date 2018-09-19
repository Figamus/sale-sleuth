import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    What up {this.props.mainState.activeUser.name}
                </div>
            </React.Fragment>
        )
    }
}