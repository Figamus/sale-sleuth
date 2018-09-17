import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import person from "../../images/person.png"
import "./Tracking.css"

export default class User extends Component {
    buildCard = () => {
        return this.props.mainState.userTrackedProduct.map((item) => {
            let product = this.props.mainState.products.find(arrayItem => arrayItem.id === item.productID)
            let prices = this.props.mainState.priceHistory.filter(price => price.productID === item.productID)
            return <div key={item.id} className="col-sm-3">
                <div className="card">
                    <canvas className="header-bg" width="250" height="70" id="header-blur"></canvas>
                    <div className="avatar">
                        <img src={person} alt=""/>
                    </div>
                    <div className="content">
                        <p>Brand: {product.brand} <br></br>
                        Model#: {product.model}<br></br>
                        UPC: {product.upc}<br></br>
                        Current Price: ${product.price}<br></br>
                        Price History: {prices.map((x) => {
                        return `${x.productPrice} ${x.date}`
                    })
                            }
                        </p>
                        <p><button type="button" className="btn btn-default">Contact</button></p>
                    </div>
                </div>
            </div>})
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