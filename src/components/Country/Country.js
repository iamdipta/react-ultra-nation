import React from 'react';

import './Country.css'

const Country = (props) => {
    const { name, region, population, flag } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-details">
            <h4>Country Name: {name}</h4>
            <img src={flag} alt="" />
            <h5>Region: {region}</h5>
            <h6>Population: {population}</h6>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;