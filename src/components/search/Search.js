import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Search.css"


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
        let filteredProducts = this.props.mainState.products.filter(
            (product) => {
                return product.brand.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <ul>
                        {filteredProducts.map((product) => {
                            return (<li key={`product-${product.id}`}>{product.brand} {product.model} <button key={`productButton-${product.id}`} className="btn btn-lg btn-success" type="submit" onClick={() => this.trackItem("userTrackedProduct", product)}>Track Item</button></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search