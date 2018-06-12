import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Shoes from './Shoes'
import Hats from './Hats'

class Shop extends Component {

    render() {
        // console.log(this.props.shopOptions)
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className=" hide-on-med-and-down">
                            <li><Link className="secondNavbar" to="/shop/shoes">Shoes</Link></li>
                            <li><Link to="/shop/hats">Hats</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-12">
                        <h1 className="collection-shop">Look at our collections</h1>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path='/shop/shoes' render={() => (<Shoes
                            shopOptions={this.props.shopOptions}
                            addToCart={this.props.addToCart}
                            counter={this.props.increment} />)}
                        />
                        <Route path='/shop/hats' render={() => (<Hats
                            shopOptions={this.props.shopOptions}
                            addToCart={this.props.addToCart}
                            counter={this.props.increment} />)}
                        />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Shop;