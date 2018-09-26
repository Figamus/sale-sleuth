import React, { Component } from "react"
import person from "../../images/person.png"
import "./Tracking.css"

export default class TrackingDetails extends Component {
    state ={
        product: {},
        prices: []
    }
    componentDidMount() {
        let product = this.props.mainState.products.find(p => p.id === parseInt(this.props.match.params.itemId, 0)) || {}
        let prices = this.props.mainState.priceHistory.filter(price => price.productID === product.id);
        this.setState({
            product: product,
            prices: prices
        })
    }
    render () {
        return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card bg-dark flex-md-row mb-4 box-shadow">
                        <div className="card-body bg-dark">
                            <h3 className="mb-0">{this.state.product.brand} {this.state.product.model}</h3>
                            <div className="card-text mb-auto">Brand: {this.state.product.brand}</div>
                            <div className="card-text mb-auto">Model: {this.state.product.model}</div>
                            <div className="card-text mb-auto">UPC: {this.state.product.upc}</div>
                            <div className="card-text mb-auto">Type: {this.state.product.type}</div>
                            <div className="card-text mb-auto">Current Price: ${this.state.product.price}</div>
                            <ul className="list-group mx-auto">
                                        {this.state.prices.map((x) => {
                                            return <li key={`price${x.id}`} className="list-group-item">{x.date} ${x.productPrice}</li>
                                                })
                                            }
                                        </ul>
                        </div>
                            <img className="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x250]" src={person} data-holder-rendered="true"></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}