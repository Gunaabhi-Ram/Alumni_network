import React from "react";
import './header.css';
import image from './pics/profile.png';

function AlumniNav(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-nav-scroll position: fixed sticky-top navbar">
            <div className="container-fluid">
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
            </button>   
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ">
                            <li className="navbar-item">
                                <a href="#about" className="nav-link h b" >About</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#Acadamics" className="nav-link h b" >Community</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#Technical Skills" className="nav-link h b" >Profile</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#Projects" className="nav-link h b" >Help</a>
                            </li>
                            <li className="navbar-item">
                                <div className="dropdown">
                                    <button className="dropbtn"><img src={image} height="30" style={{borderRadius:"20px"}}/></button>
                                    <div className="dropdown-content">
                                    <a href="#">Change Password</a>
                                    <a href="loginpage.html">Log Out</a>
                                </div>
                                </div>
                            </li>
                        </ul>
            </div>
            </div>
            </nav>
        </div>
    
      );
}
export default AlumniNav;