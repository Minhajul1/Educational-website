import React, { useEffect, useState } from 'react';
import DemoData from '../DemoData/DemoData';
import './Demo.css'

const Demo = () => {
    const [demos,setDemo] = useState([]);
    useEffect( () => {
        fetch('./free-demo-data.JSON')
        .then(response => response.json())
        .then(data => setDemo(data))
    },[])
    return (
        <div>
            
            <div className="demo-bottom-section">
            <h1>You can check the quality yourself by watching the demo</h1>
                <p>Video tutorial is a digital learning system. Learning by watching videos in the developed world is a very popular learning medium. But the sector has not improved due to lack of quality trainers in our country as well as the distrust of students.But we are trying to provide best quality courses for a small amount of money so that students can learn at home and save both their money+time.</p>
            </div>
            <div className="demo-container">
            {
                demos.map(demoData => <DemoData demoData={demoData}></DemoData>)
            }
            </div>
        </div>
    );
};

export default Demo;