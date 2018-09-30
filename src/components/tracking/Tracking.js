import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Computer from "../../images/computer.png"
import Appliance from "../../images/appliance.png"
import Outdoors from "../../images/outdoors.png"
import Apparel from "../../images/apparel.png"
import HealthBeauty from "../../images/health-beauty.png"
import Tools from "../../images/tools.png"
import Toys from "../../images/toy.png"
import Home from "../../images/home.png"
import Books from "../../images/books.png"
import Automotive from "../../images/automotive.png"
import Sports from "../../images/sports.png"
import Jewelry from "../../images/jewelry.png"
import Electronics from "../../images/electronics.png"
import Movies from "../../images/movies.png"
import Gaming from "../../images/gaming.png"
import Music from "../../images/music.png"
import Person from "../../images/person.png"
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
        let filterImage = (card) => {
            if (card.product.type === "Computers") {
                return Computer
            } else if (card.product.type === "Appliance") {
                return Appliance
            } else if (card.product.type === "Outdoors") {
                return Outdoors
            } else if (card.product.type === "Apparel") {
                return Apparel
            } else if (card.product.type === "Health & Beauty") {
                return HealthBeauty
            } else if (card.product.type === "Tools") {
                return Tools
            } else if (card.product.type === "Toys") {
                return Toys
            } else if (card.product.type === "Home") {
                return Home
            } else if (card.product.type === "Books") {
                return Books
            } else if (card.product.type === "Automotive") {
                return Automotive
            } else if (card.product.type === "Sports") {
                return Sports
            } else if (card.product.type === "Jewelry") {
                return Jewelry
            } else if (card.product.type === "Electronics") {
                return Electronics
            } else if (card.product.type === "Movies") {
                return Movies
            } else if (card.product.type === "Gaming") {
                return Gaming
            } else if (card.product.type === "Jewelry") {
                return Jewelry
            } else if (card.product.type === "Music") {
                return Music
            } else {
                return Person
            }
        }
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row">
                            {this.state.cards.map((card) => {
                                let productImage = filterImage(card);
                                return (
                                <div key={`card--${card.id}`} className="col-3">
                                    <div className="card bg-dark inner rounded-0 border border-secondary shadow">
                                        <div className="avatar">
                                            <img src={productImage} alt="" />
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