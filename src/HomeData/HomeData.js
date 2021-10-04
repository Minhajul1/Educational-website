import React from 'react';
import './HomeData.css'

const HomeData = (props) => {
    const {name, img, details} = props.homeData
    return (
        <div className="home-data-card">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{details}</p>
        </div>
    );
};

export default HomeData;