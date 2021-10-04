import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import './Services.css'


const Service = () => {
    const [services, setService] = useState([])
    useEffect( () => {
        fetch('./courses.JSON')
        .then(response => response.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h1>Our Courses</h1>
            <div className="service-container">
            {
                services.map(serviceData => <ServiceData serviceData={serviceData}></ServiceData>)
            }
            </div>
        </div>
    );
};

export default Service;