import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav style={{backgroundColor:"black",padding:"20px"}}>
                <NavLink to="/home"style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Home</NavLink>
                <NavLink to="/service"style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Services</NavLink>
                <NavLink to="/About"style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>About</NavLink>
                <NavLink to="/demo"style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Free-demo</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;