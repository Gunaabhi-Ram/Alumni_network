import React from "react";
import './header.css';
import back from './pics/back.png';
import admin from './pics/Admin.jpg';
import alumni from './pics/Alumni.jpg';
import company from './pics/Company.jpg';
function Login(){
    return (
        <div>
                <h1 align="center" className="header">Login</h1>
    <br/>
    <div className="px-2">
        <a href="about.html"><img src={back} width="100"/></a>
    </div>
    <div className="container">
        <div className="row">
            <div className="row">
                <div className="col pt-5 pr-5" align="center">
                    <div className="card ms-5 lo log">
                        <img className="card-img-top" src={alumni} align="center" width="270"/>
                        <div className="card-body" align="center">
                            <h2><a className="btn btn-outline-dark btn-lg" href="alumnilogin.html"><b>Alumni</b></a></h2>
                        </div>
                      </div>
                </div>
                <div className="col pt-5 pr-5" align="center">
                    <div className="card ms-5 lo log">
                        <img className="card-img-top" src={admin} align="center" width="270"/>
                        <div className="card-body" align="center">
                            <h2><a className="btn btn-outline-dark btn-lg" href="adminlogin.html"><b>Admin</b></a></h2>
                        </div>
                      </div>
                </div>
                <div className="col pt-5 pr-5" align="center">
                    <div className="card ms-5 lo log">
                        <img className="card-img-top" src={company} align="center" width="270"/>
                        <div className="card-body" align="center">
                            <h2><a className="btn btn-outline-dark btn-lg" href="companylogin.html"><b>Company</b></a></h2>
                        </div>
                      </div>
                </div>
                
                
            
    
        </div>
        </div>
    </div>
        </div>
      );
}
export default Login;