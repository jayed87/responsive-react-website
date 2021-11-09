import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    // const {service}= props;
    const { name, price, description, img } = service;
    return (
        <div className="service-container">
            <img src={img} alt="img" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Service;