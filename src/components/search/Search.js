import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Search.css"
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


class Search extends Component {
    state = {
        search: ""
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0)
        })
    }

    trackItem = (resource, product) => {
        let newObject = {
            userID: this.props.mainState.activeUser.id,
            productID: product.id
        }
        this.props.allFunctions.post(resource, newObject)
        alert(`You are now tracking ${product.brand} ${product.model}`)
            ;
    }

    

    render() {
        let newProducts = this.props.mainState.products.map((product) => {
            return {
                id: product.id,
                fullName: `${product.brand} ${product.model} ${product.upc} ${product.type}`,
                brand: product.brand,
                model: product.model,
                upc: product.upc,
                type: product.type,
                price: product.price
            }
        })
        let filteredProducts = newProducts.filter(
            (product) => {
                return product.fullName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        let filterImage = (product) => {
            if (product.type === "Computers") {
                return Computer
            } else if (product.type === "Appliance") {
                return Appliance
            } else if (product.type === "Outdoors") {
                return Outdoors
            } else if (product.type === "Apparel") {
                return Apparel
            } else if (product.type === "Health & Beauty") {
                return HealthBeauty
            } else if (product.type === "Tools") {
                return Tools
            } else if (product.type === "Toys") {
                return Toys
            } else if (product.type === "Home") {
                return Home
            } else if (product.type === "Books") {
                return Books
            } else if (product.type === "Automotive") {
                return Automotive
            } else if (product.type === "Sports") {
                return Sports
            } else if (product.type === "Jewelry") {
                return Jewelry
            } else if (product.type === "Electronics") {
                return Electronics
            } else if (product.type === "Movies") {
                return Movies
            } else if (product.type === "Gaming") {
                return Gaming
            } else if (product.type === "Jewelry") {
                return Jewelry
            } else if (product.type === "Music") {
                return Music
            } else {
                return Person
            }
        }
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <form className="card rounded-0 borde border-primary shadow card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Filter by Brand name, Model number or UPC code" value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="row">
                        {filteredProducts.map((product) => {
                            let productImage = filterImage(product);
                            return (
                                <div key={`product-${product.id}`} className="col-sm-3">
                                    <div className="inner card bg-dark rounded-0 border border-secondary shadow ">
                                        <div className="avatar">
                                            <img src={productImage} alt="" />
                                        </div>
                                        <div>
                                            {product.brand} {product.model}
                                        </div>
                                        <div>
                                            UPC#: {product.upc}
                                        </div>
                                        <div>
                                            Product Type: {product.type}
                                        </div>
                                        <button key={`productButton-${product.id}`} className="btn btn-lg btn-success rounded-0 button" type="submit" onClick={() => this.trackItem("userTrackedProduct", product)}>Track Item</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search