import React, { useState } from "react";
import PayPal from "./PayPal";

export default function Checkout() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App" style={{backgroundColor:'#FFE55C'}}>

 
<div>
          
          <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
          <div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link "href="/Viewpayments" style={{marginLeft:"200px",fontsize:'15px',width:'190px',fontSize:'20px',color:'rgb(255,255,255)'}}>Back</a></li>  
                      <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"900px"}}>Log Out</a></li>
                     
                    
                  </ul>
                  
                  
              </div>
          </div>
      </nav>
            </div>









      
      {checkout ? (
        <PayPal />
      ) : (
        <button style={{width:'100px', height:'60px', marginTop:'200px', marginLeft:'700px'}}
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
      <br></br>  <br></br>  <br></br>   <br></br>  <br></br>  <br></br>
      <table  style={{marginLeft:'300px'}}>
      <th><img src="/15.png" class="mx-auto" alt="paypal" width="500px" height="150px" /> </th>
      <th ><img src="/16.png" class="mx-auto" alt="paypal" width="500px" height="150px" /> </th>
      </table>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

      <div>  
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>


    
    <div style={{backgroundColor:"#080523", marginTop:"0px"}}>

    <div id="contact" className="container" style={{backgroundColor:"#080523", color:"white"}}>
    <h3 className="text-center">Contact</h3>
    <p className="text-center"><em>We love your comments!</em></p>

    <div className="row">
    <div className="col-md-4" style={{marginLeft:"0px"}}>
        <p>Drop a note.</p>
        <p><span className="glyphicon glyphicon-map-marker"></span>Colombo, Sri Lanka</p>
        <p><span className="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
        <p><span className="glyphicon glyphicon-envelope"></span>Email: RoyalRise@mail.com</p>
    </div>
    <div className="col-md-8">
    <div className="row">
        <div className="col-sm-6 form-group">
        <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div className="col-sm-6 form-group">
        <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
    </div>
    <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
    <br/>
    <div className="row">
        <div className="col-md-12 form-group">
        <button className="btn pull-right" type="submit" style={{backgroundColor:"white"}}>Send</button>
        </div>
    </div>
    </div>
    </div>
    </div></div></div>


    </div>
  );
}
