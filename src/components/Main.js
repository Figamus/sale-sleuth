import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from "./navbar/Navbar";
import Overview from "./overview/Overview";


export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/" render={props => {
                    return <div>
                        <Navbar {...props}/>
                        <Overview {...props}/>
                        </div>
                    }} />
            </React.Fragment>
        )
    }
}