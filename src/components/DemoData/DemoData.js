import React from 'react';
import './DemoData.css'

const DemoData = (props) => {
    const {image,details} = props.demoData
    return (
        <div>
            
            <div className="demo-data-card">
                <img src={image} alt=""/>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default DemoData;