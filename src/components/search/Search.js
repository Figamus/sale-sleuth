import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Search.css"


class Search extends Component {
    state = {
        search: ""
    }

    updateSearch(event) {
        this.setState(
            {search: event.target.value.substr(0,20)})
    }
    
    handleLogout = () => {
        sessionStorage.removeItem("user");
        this.props.history.push("/");
    }
    render() {
        let filteredProducts = this.props.mainState.products.filter(
            (product) => {
                return product.brand.indexOf(this.state.search) !== -1;
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
                                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" value={this.state.search} onChange={this.updateSearch}></input>
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
                            return (<li key={`product-${product.id}`}>{product.brand} {product.model} <button key={`productButton-${product.id}`} className="btn btn-lg btn-success" type="submit">Add To Tracking</button></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search