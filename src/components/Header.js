import React from "react";
import './header.css';

function Header(){
    return (
        <div>
            <div className="container-fluid" id="A">
        <div className="row">
            <div className="col-sm-3">
                <img src="https://kmit.in/images/kmit-bar.png" height="110"/>
            </div>
            <div className="col-sm-9" align="left">
                <h3 className="display-2">ALUMNI NETWORK</h3>
            </div>
        </div>
    </div>
        {/* <nav className="navbar navbar-expand-lg navbar-nav-scroll position: fixed sticky-top navbar">
            <div className="container-fluid">
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ps-3">
                            <li className="navbar-item">
                                <a href="about.html" className="nav-link h b">About</a>
                            </li>
                            <li className="navbar-item">
                                <a href="" className="nav-link h b">Community</a>
                            </li>
                            <li className="navbar-item">
                                <a href="profile.html" className="nav-link h b">Profile</a>
                            </li>
                            <li className="navbar-item">
                                <a href="" className="nav-link h b">Help</a>
                            </li>
                            <li className="navbar-item">
                                <a href="loginpage.html" className="nav-link h b">Login</a>
                            </li>
                            <li className="navbar-item">
                                <a href="register.html" className="nav-link h b">Register</a>
                            </li>
                        </ul>
            </div>
            </nav> */}
        </div>
    
      );
}
export default Header;