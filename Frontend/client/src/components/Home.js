import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div style = {{backgroundColor : "#FFE55C"}}>
 <div>
 <center>
      <h1 style={{backgroundColor:'black', color:"#FFE55C", height:"100px", fontSize:'50px'}}>-------WELCOME To ROYAL RISE HOTEL ---------- </h1>
      </center>

 
            
 <img src="/13.jpg" class="mx-auto" alt="" width="1517" height="800px"/>
 <br></br>
 <br></br>
 <br></br>

 <center>
            <button class="btn btn-primary btn-lg btn-block"><a href = "/Registration" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Hotel Staff Login</a></button>
                 <i className="far fa-check-square"></i>&nbsp;&nbsp;&nbsp;
     
            <button class="btn btn-primary btn-lg btn-block"><a href = "/Login" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Traveler Login</a></button>
                <i className="far fa-check-square"></i>&nbsp;
            </center>
 
 <br></br>
 <br></br>
 </div>
 

      </div>
     
    )
  }
}
