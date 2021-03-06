import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import './Navbar.css';


class NavBar extends Component {
    handleLogout = () => {
        sessionStorage.removeItem("user");
        this.props.history.push("/");
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Main</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tracking">Tracked Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Track A New Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">User Profile</Link>
                    </li>
                    <button className="Logout btn btn-info" onClick={this.handleLogout}>Logout</button>
                </ul>
            </nav>
        )
    }
}

export default NavBar