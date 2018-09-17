import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import person from "../../images/person.png"
import "./Tracking.css"

export default class User extends Component {
    state = {
        cards: []
    }

    buildCard () {
        let cardsArray = [];
        cardsArray.push(this.props.mainState.userTrackedProduct.map((item) => {
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
                            Price History:
                            </p>
                            <ul className="list-group list-group-flush listItem mx-auto">
                            {prices.map((x) => {
                                return <li key={`price${x.id}`} className="list-group-item">{x.date} ${x.productPrice}</li>
                                    })
                                }
                            </ul>
                            <p><button type="button" className="btn btn-default">Details</button></p>
                            <p><button type="button" className="btn btn-default" onClick={() => this.props.allFunctions.delete("userTrackedProduct", item.id)}>Untrack</button></p>
                        </div>
                    </div>
                </div>}))
        this.setState({
            cards: cardsArray
        })
    }
    componentDidMount () {
        this.buildCard()
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="row">
                {this.state.cards}
                </div>
            </React.Fragment>
        )
    }
}