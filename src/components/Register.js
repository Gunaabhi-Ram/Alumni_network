import React from "react";
import './header.css';
import logo from './pics/maxresdefault.jpg';
function Register(){
    return (
        <div>
            <div style={{backgroundColor:"white"}}>
            <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                {/* <img src={logo} width="180"/> */}
            </div>
            <div class="col-sm-4">
                <br/><br/>
                <h2 align="center"><b>Register</b></h2>
                <p align="center">Please enter your information below to begin registration</p>
            </div>
        </div>
    </div>
    <br/>
    <div class="container-fluid">
        <div class="card re" align="center">
            <div class="card-body">
                <br/><br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>First Name*:</h6></div>
                    <div class="col-sm-4"><input/></div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>Last Name*:</h6></div>
                    <div class="col-sm-4"><input/></div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>Date of Birth*:</h6></div>
                    <div class="col-sm-4"><input type="date"/></div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>Email*:</h6></div>
                    <div class="col-sm-4"><input/></div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>Phone number*:</h6></div>
                    <div class="col-sm-4"><input/></div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>Login ID*:</h6></div>
                    <div class="col-sm-4"><input/></div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>Password*:</h6></div>
                    <div class="col-sm-4"><input type="password"/></div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4"><h6>Re-enter Password*:</h6></div>
                    <div class="col-sm-4"><input type="password"/></div>
                </div>
                <br/><br/>
                <a href="" class="btn btn-outline-dark btn-lg">Register</a>
                <br/><br/>
            </div>
            
        </div>
    </div>
    <br/><br/><br/><br/><br/>
            </div>
        </div>
      );
}
export default Register;

