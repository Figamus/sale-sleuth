import React, { Component } from "react"
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
        let filterImage = (card) => {
            if (card.type === "Computers") {
                return Computer
            } else if (card.type === "Appliance") {
                return Appliance
            } else if (card.type === "Outdoors") {
                return Outdoors
            } else if (card.type === "Apparel") {
                return Apparel
            } else if (card.type === "Health & Beauty") {
                return HealthBeauty
            } else if (card.type === "Tools") {
                return Tools
            } else if (card.type === "Toys") {
                return Toys
            } else if (card.type === "Home") {
                return Home
            } else if (card.type === "Books") {
                return Books
            } else if (card.type === "Automotive") {
                return Automotive
            } else if (card.type === "Sports") {
                return Sports
            } else if (card.type === "Jewelry") {
                return Jewelry
            } else if (card.type === "Electronics") {
                return Electronics
            } else if (card.type === "Movies") {
                return Movies
            } else if (card.type === "Gaming") {
                return Gaming
            } else if (card.type === "Jewelry") {
                return Jewelry
            } else if (card.type === "Music") {
                return Music
            } else {
                return Person
            }
        }
        let productImage = filterImage(this.state.product);
        return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card bg-dark flex-md-row mb-4 box-shadow rounded-0 border-0">
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
                            <img className="detailImage" alt="Thumbnail [200x250]" src={productImage} data-holder-rendered="true"></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}