import React, { Component } from 'react';

class Shoes extends Component {

    render() {
        console.log(this.props.increment)
        let shopOptions = this.props.shopOptions
        let shopOptionsShoe = shopOptions.map((option) => {

            if (option.type === 'shoe') {
                return (
                    <div className="col-4">
                        < div className="card">
                            <img className="card-img-top" src={option.picture} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{option.name}</h5>
                                <p className="card-text">${option.price}.00</p>
                                <button className="btn btn-primary" type="submit" onClick={() => { this.props.addToCart(option) }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                        )
                    }
                })
                return (
            <div className="container">
                            <h2>Shoes Colletion</h2>
                            <br /><br />
                            <div className="row">
                                {shopOptionsShoe}
                            </div>
                        </div>
                        )
                    }
                }
export default Shoes;