import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'


const shopOptions = [{
    name: 'Flex Pumps', 
    price: 100, 
    picture: '/img/black.jpg', 
    type: 'shoe',
    quantity: 1
},
{
    name: 'Vince', 
    price: 90, 
    picture: '/img/pink.jpg', 
    type: 'shoe',
    quantity: 1
},
{
    name: 'Platform Pumps', 
    price: 110, 
    picture: '/img/nude.jpg', 
    type: 'shoe',
    quantity: 1
},
{
    name: 'White Hat', 
    price: 70, 
    picture: '/img/hat1.jpeg', 
    type: 'hat',
    quantity: 1
},
{
    name: 'Grey Hat', 
    price: 75, 
    picture: '/img/hat2.jpeg', 
    type: 'hat',
    quantity: 1
},
{
    name: 'Beige Hat', 
    price: 65, 
    picture: '/img/hat3.jpeg', 
    type: 'hat',
    quantity: 1
},

]


ReactDOM.render(
    <Router>
        <App 
        shopOptions={shopOptions}
        /> 
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
