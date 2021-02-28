import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const populationTotal = cart.reduce((population,country)=>population+country.population,0)
    return (
        <div>
            <h2>Added cart {cart.length}</h2>
            <h1>Total Population: {populationTotal}</h1>
        </div>
    );
};

export default Cart;