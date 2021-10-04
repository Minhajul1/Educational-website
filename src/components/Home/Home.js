import React, { useEffect, useState } from 'react';
import HomeData from '../../HomeData/HomeData';
import './Home.css'


const Home = () => {
    const [intros,setIntro] = useState([]);
    useEffect( () => {
        fetch('./introData.JSON')
        .then(response => response.json())
        .then(data => setIntro(data))
    },[])
    return (
        <div>
            <h1>Welcome to our Programming World !!</h1>
            <div className="home-container">
                {
                    intros.map(homeData => <HomeData homeData={homeData}></HomeData>)
                }
            </div>
        </div>
    );
};

export default Home;