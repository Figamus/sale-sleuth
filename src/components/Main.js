import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from "./navbar/Navbar";
import Overview from "./overview/Overview";


export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Route render={props => {
                    return <Navbar {...props}/>
                    }} />
                <Route path="/" render={props => {
                    return <Overview {...props}/>
                    }} />
            </React.Fragment>
        )
    }
}