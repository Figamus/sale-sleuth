import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Overview.css"


export default class Overview extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="text-light text-center">
                    <h1 className="welcomeTitle">Welcome to Sale Sleuth.</h1>
                    <h4>A Price Tracking Solution</h4>
                </div>
            </React.Fragment>
        )
    }
}