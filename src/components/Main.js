import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Overview from "./overview/Overview";


export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={props => {
                    return <Overview {...props}/>
                    }} />
            </React.Fragment>
        )
    }
}