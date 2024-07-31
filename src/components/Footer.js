import React from "react";
import './Header.js';
import x from './pics/download.jfif';
function Footer(){
    return(
        <div>
            <br/><br/>
            <hr/>
    <br/><br/>
    <div className="container" id="help">
        <div className="row">
            <div className="col-sm-6">
                <p>Contact no:<a href="">+91 8019227891</a></p>
                <p>Email: <a href="">chotu.devasani99@gmail.com</a></p>
            </div>
            <div className="col-sm-6">
                <img className="img-fluid" src={x} width="200" align="right"/>
            </div>
        </div>
    </div>
    <br/><br></br>
        </div>
    );
}
export default Footer;