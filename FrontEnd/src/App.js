import React, { Component } from 'react';
import Home from './Components/Home'
import Shop from './Components/Shop'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shopOptions: this.props.shopOptions,
      cart: [],
      name: "Anonymous",
      isLoading: true
    }
  }

  /* Get data from JSON file*/
  componentDidMount() {
    axios.get('http://localhost:8080/getcart')
      .then(response => {
        if (response.data) {
          console.log(response.data)
          this.setState({
            cart: response.data,
            isLoading: false
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  /*Post cart item in JSON file*/
  componentDidUpdate() {
    localStorage.setItem('newName', JSON.stringify(this.state.name))
    axios.post('http://localhost:8080/postcart', this.state.cart)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /*Adding item to the cart*/
  addToCart = (shopItem) => {
    console.log(this.state.cart)
    let cartTemp = Object.keys(this.state.cart).length === 0 ? [] : this.state.cart
    console.log(cartTemp)
    console.log(shopItem)

    cartTemp.push(shopItem);
    this.setState({
      cart: cartTemp,
    })
    // console.log(this.state.cart)
  }

  /*Adding name*/
  addName = (name) => {
    console.log(this.state.name)
    this.setState({
      name: name

    })
    let newName = JSON.parse(localStorage.getItem('name'))
    if (newName) {
      this.setState({
        newName,
        name: name
      })
    }
  }

  render() {

    if (this.state.isLoading) {
      console.log('Loading...')
      return (<div>Loading Cart...</div>)
    } else {
      return (
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => (<Home
              name={this.state.name}
              addName={this.addName} />)}
            />
            <Route path="/shop" render={() => (<Shop
              shopOptions={this.state.shopOptions}
              addToCart={this.addToCart}
              cart={this.state.cart} />)}
            />
            <Route path="/cart" render={() => (<Cart
              cart={this.state.cart}
              name={this.state.name}
            />)}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
