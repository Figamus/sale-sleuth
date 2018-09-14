import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import person from "../../images/person.png"
import "./Tracking.css"

export default class User extends Component {
    state = {
        userTrackedProduct: [],
    }
    componentDidMount() {
        let counter = this.props.mainState.userTrackedProduct.filter((tp) => tp.userID === this.props.mainState.activeUser.id)
        console.log(counter)
        this.setState({
            userTrackedProduct: counter
            })
    }

    buildCard = () =>{
        return this.state.userTrackedProduct.map((item) => {
            return <div key={item.id} className="col-sm-4">
                <div className="card">
                    <canvas className="header-bg" width="250" height="70" id="header-blur"></canvas>
                    <div className="avatar">
                        <img src={person} alt=""/>
                    </div>
                    <div className="content">
                        <p>{item.brand} <br></br>
                        {item.model}<br></br>
                        {item.upc}<br></br>
                        {item.price}
                        </p>
                        <p><button type="button" className="btn btn-default">Contact</button></p>
                    </div>
                </div>
            </div>
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                {this.buildCard()}
                </div>
            </React.Fragment>
        )
    }
}