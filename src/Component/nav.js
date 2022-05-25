import React from "react";
import camera from "../Mock-data/camera.png"
import logo from "../Mock-data/logo.png"
import {Link} from 'react-router-dom'

function Nav(){
    return (
        <>
        <nav className="navbar">
            <h1><img src={logo} alt=" logo" width="30px" height=" 30px"/>InstaClone</h1>
            <Link to="/form"><img src={camera} alt="camera"  width="36px" height="36px" className="camera"/></Link>
            </nav>
            </>
    );
}
export default Nav;