import React, { Component } from 'react';


class Cart extends Component {
    render() {
        console.log(this.props.cart)
        let itensShop = this.props.cart.map((item) => {
            return <div>
                < table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><img className="imgCart" src={item.picture} alt="" /></th>
                            <td>{item.name}</td>
                            <td>${item.price}.00</td>
                            <td>{item.quantity}</td>
                        </tr>
                    </tbody>
                </table >
            </div>
        })

        let totalPrice = this.props.cart.reduce((sum, item) => {
            return sum += item.price
            // console.log(item.price)
        }, 0)

        if (this.props.cart.length === 0) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="name-cart">Hello {this.props.name}!!</h1>
                        </div>
                    </div>
                    <br /><br />
                    <h2>Your cart is empty</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="container">
                        <h1>Hello {this.props.name}!! This is your cart!</h1>
                        <br /><br />
                        {itensShop}
                        <div className="row">
                            <div className="col-12">
                                <h4 className="total">Your total is: ${totalPrice}.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Cart