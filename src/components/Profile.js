import React from "react";
import './header.css';
import back from './pics/back.png';
import x from './pics/create1.jpg';
import y from './pics/update.png';
function Profile(){
    return (
        <div>
            <h1 align="center">Profile</h1>
            <br/>
            <div className="px-2"><a href="about.html"><img src={back} width="100"/></a></div>
            <br/>
            <div className="container">
        <div className="row">
            <div className="row">
                <div className="col pt-5 pr-5" align="center">
                    <div className="card ms-5 lo log1" style={{width:"18rem;",border:"white;"}}>
                        <img className="card-img-top pd-4" src={x} align="center" width="270"/>
                        <div className="card-body" align="center">
                            <h2><a className="btn btn-outline-dark btn-lg" href=""><b>Create</b></a></h2>
                        </div>
                      </div>
                </div>
                <div className="col pt-5 pr-5" align="center">
                    <div className="card ms-5 lo log1" style={{width:"18rem;",border:"white;"}}>
                        <img className="card-img-top pd-4" src={y} align="center" width="270"/>
                        <div className="card-body" align="center">
                            <h2><a className="btn btn-outline-dark btn-lg" href=""><b>Update</b></a></h2>
                        </div>
                      </div>
                </div>
        </div>
        </div>
    </div>
        </div>
      );
}
export default Profile;