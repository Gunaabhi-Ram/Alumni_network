import React from "react";
import './header.css';
import logo from './pics/maxresdefault.jpg';
function CompanyLogin(){
    return (
        <div>
             <div style={{backgroundColor:"white"}}>
         {/* <img src={logo} width="170"/> */}
    <br/><br/>
    <h1 align="center">COMPANY PORTAL</h1>
    <br/><br/>
    <div className="container">
        <div className="card w">
            <br/><br/>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4"><h5>Login</h5></div>
                    <div className="col-sm-4"><input placeholder="Login"/></div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4"><h5>Password</h5></div>
                    <div className="col-sm-4"><input type="password" placeholder="Password"/></div>
                </div>
                <br/><br/>
                <div align="center">
                    <a href="" className="btn btn-outline-dark btn-lg">Login</a>
                    <br/><br/>
                    <a href="">Forgot Password?</a>
                </div>
                
            </div>
        </div>
    </div>
       </div>
        </div>
      );
}
export default CompanyLogin;

