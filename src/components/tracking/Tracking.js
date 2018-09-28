import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import person from "../../images/person.png"
import "./Tracking.css"

export default class User extends Component {
    state = {
        cards: []
    }

    componentDidMount() {
        let cardsArray = this.props.mainState.userTrackedProduct.map((item) => {
            let product = this.props.mainState.products.find(arrayItem => arrayItem.id === item.productID);
            let prices = this.props.mainState.priceHistory.filter(price => price.productID === item.productID);
            return {
                id: product.id,
                userTrackedProductID: item.id,
                product: product,
                prices: prices
            }
        })
        this.setState({
            cards: cardsArray
        })
    }

    componentWillReceiveProps(nextProps) {
        let cardsArray = nextProps.mainState.userTrackedProduct.map((item) => {
            let product = nextProps.mainState.products.find(arrayItem => arrayItem.id === item.productID);
            let prices = nextProps.mainState.priceHistory.filter(price => price.productID === item.productID);
            return {
                id: product.id,
                userTrackedProductID: item.id,
                product: product,
                prices: prices
            }
        })
        this.setState({
            cards: cardsArray
        })
    }

    untrackItem(resource, id) {
        this.props.allFunctions.delete(resource, id)
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row">
                            {this.state.cards.map((card) => {
                                return (
                                <div key={`card--${card.id}`} className="col-3">
                                    <div className="card bg-dark inner rounded-0 border border-secondary shadow">
                                        <div className="avatar">
                                            <img src={person} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>Brand: {card.product.brand}<br />
                                                Model#: {card.product.model}<br />
                                                UPC: {card.product.upc}<br />
                                                Current Price: ${card.product.price}<br />
                                                Price History:
                                        </p>
                                            <ul className="list-group list-group-flush listItem mx-auto">
                                                {card.prices.map((price) => {
                                                    return <li key={`price--${price.id}`} className="list-group-item">{price.date} ${price.productPrice}</li>
                                                })
                                                }
                                            </ul>
                                            <p><button type="button" className="btn btn-lg btn-success rounded-0 tracking-button" onClick={() => this.props.history.push(`/tracking/details/${card.id}`)}>Details</button></p>
                                            <p><button type="button" className="btn btn-sm btn-danger rounded-0 tracking-button-danger" onClick={() => this.untrackItem("userTrackedProduct", card.userTrackedProductID)}>Untrack</button></p>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}