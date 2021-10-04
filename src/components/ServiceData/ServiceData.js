import React from 'react';
import './ServiceData.css'

const ServiceData = (props) => {
    const {name, img, fees} = props.serviceData
    return (
        <div className="service-data-card">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h4>Course Fee : {fees}</h4>
        </div>
    );
};

export default ServiceData;