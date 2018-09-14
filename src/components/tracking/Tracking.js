import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import person from "../../images/person.png"
import "./Tracking.css"

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                            <div class="avatar">
                                <img src={person} alt=""/>
                            </div>
                            <div class="content">
                                <p>Web Developer <br></br>
                                More description here</p>
                                <p><button type="button" class="btn btn-default">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                            <div class="avatar">
                                <img src={person} alt=""/>
                            </div>
                            <div class="content">
                                <p>Web Developer <br></br>
                                More description here</p>
                                <p><button type="button" class="btn btn-default">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                            <div class="avatar">
                                <img src={person} alt=""/>
                            </div>
                            <div class="content">
                                <p>Web Developer <br></br>
                                More description here</p>
                                <p><button type="button" class="btn btn-default">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}