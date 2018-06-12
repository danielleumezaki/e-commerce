import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {}
        }
    }

    addNewNameHandler = (event) => {
            
        if(this.refs.text.value === '') {
            alert('Name is required!')
        } else {
            this.setState({ 
                name: this.refs.text.value
                }, function(){
                    this.props.addName(this.state.name);
                })
        }
        event.preventDefault();
     }
    render() {
        return (
            <div className="container-fluid">
                <h1 className="header">Welcome to Shop App</h1>
                <div className="row">
                <div className="col-12">
                <div className="input-name">
                    <form  name="formNewName" onSubmit={this.addNewNameHandler.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="First Name" id="firstName" type="text" className="validate" ref="text" />
                                <br /><br />
                                <div className="row">
                                <input className="waves-effect waves-light btn purple lighten-1" type="submit" value="SUBMIT" />
                            </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home