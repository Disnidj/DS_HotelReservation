import React, {} from  'react';




export default function HomeHotel() {
    return (

   
      <div style = {{backgroundColor : "#FFE55C"}}>
        <center>
      <h1>-------WELCOME To ROYAL RISE HOTEL RESERVATION---------- </h1>
      </center>

      
      <div>
          
          <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
          <div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link "href="/Hotel" style={{fontsize:'15px',width:'190px',fontSize:'20px',color:'rgb(255,255,255)'}}>Home</a></li>
                    
                      <li className="nav-item"><a className="nav-link" href="/bookings" style={{fontsize:'15px',width:'290px',fontSize:'20px',color:'rgb(255,255,255)'}}>Room Reservations</a></li>
                     
                      <li className="nav-item"><a className="nav-link" href="/taxiadd" style={{fontsize:'15px',width:'290px',fontSize:'20px',color:'rgb(255,255,255)'}}>Taxi Reservation</a></li>
                      
                      <li className="nav-item"><a className="nav-link" href="/Location" style={{fontsize:'15px',width:'190px',fontSize:'20px',color:'rgb(255,255,255)'}}> Location</a></li>
   
                    

                     
                      
                      <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"400px"}}>Log Out</a></li>
                     
                    
                  </ul>
                  
                  
              </div>
          </div>
      </nav>
            </div>

            <br/><br/>

            <img src="/Hotel.jpeg" class="mx-auto" alt="" width="1500" height=""/>
            

            <br/><br/>

            <center>
            <button className="btn btn-info"><a href = "/bookings" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Room Reservation</a></button>
                 <i className="far fa-check-square"></i>&nbsp;&nbsp;&nbsp;
     
            <button className="btn btn-info"><a href = "/taxiadd" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Taxi Reservation</a></button>
                <i className="far fa-check-square"></i>&nbsp;
            </center>


    </div>


    
    );
  }