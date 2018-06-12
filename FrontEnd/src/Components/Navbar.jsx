import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar