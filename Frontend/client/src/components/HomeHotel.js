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
                      <li className="nav-item"><a className="nav-link "href="/" style={{fontsize:'15px',width:'190px',fontSize:'20px',color:'rgb(255,255,255)'}}>Home</a></li>
                    
                      
                      <li className="nav-item"><a className="nav-link" href="/add" style={{fontsize:'15px',width:'170px',fontSize:'20px',color:'rgb(255,255,255)'}}>Room Reservations</a></li>
                     
                      <li className="nav-item"><a className="nav-link" href="/taxiadd" style={{fontsize:'15px',width:'190px',fontSize:'20px',color:'rgb(255,255,255)'}}>Taxi Reservation</a></li>
                      
                      <li className="nav-item"><a className="nav-link" href="/Location" style={{fontsize:'15px',width:'190px',fontSize:'20px',color:'rgb(255,255,255)'}}>Our Location</a></li>
                     

                     
                      
                      <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"200px", fontSize:'20px'}}>Log Out</a></li>
                     
                    
                  </ul>
                  
                  
              </div>
          </div>
      </nav>
            </div>
            <div>
            <center>
                            <h2><b>Available Facilities</b></h2>
                            </center>

            
          <div >
                    
                    <table width = "1400px" height = "250px" style={{margin: "20px"}}>
                       
                          <tbody>
                            <tr>
                <th>  <img src="/10.jpg" class="mx-auto" alt="" width="330" height="250"/><p> Gym</p></th> 
                  <th> <img src="/11.jpg" class="mx-auto" alt="" width="330" height="250"/><p> Pool Area</p></th>
                  <th><img src="/12.jpg" class="mx-auto" alt="" width="330" height="250"/><p> Dining Area</p></th> </tr>
                  
              </tbody>
            </table>
                   <br/>
          </div>
                    </div>
              


                             <center>
                            <h2><b>Available types of Rooms</b></h2>
                            </center>
          <div>
          <div style={{ marginTop:'-20px'}}>
                    <br/>
                    <table width = "1400px" height = "500px" style={{margin: "20px"}}>
                       
                          <tbody>
                            <tr>
                <th>  <img src="/1.jpg" class="mx-auto" alt="" width="330" height="250"/><p> Room for one Bronze - Rs.10,000/= per day</p></th> 
                  <th> <img src="/2.webp" class="mx-auto" alt="" width="330" height="250"/><p> Room for one Gold - Rs.15,000/= per day</p></th>
                  <th><img src="/3.webp" class="mx-auto" alt="" width="330" height="250"/><p> Room for one Platinum - Rs.25,000/= per day</p></th> </tr>
                  <tr>
                  <th><img src="/4.jpg" class="mx-auto" alt="" width="330" height="250"/><p> Room for two Bronze - Rs.20,000/= per day</p></th> 
                   <th><img src="/5.jpg" class="mx-auto" alt="" width="330" height="250"/><p> Room for one Gold - Rs.30,000/= per day</p></th>
                   <th><img src="/6.webp" class="mx-auto" alt="" width="330" height="250"/><p> Room for one Bronze - Rs.50,000/= per day</p></th>
                   </tr>
              </tbody>
            </table>
                   <br/>
          </div>
                    </div>
                      <br/><br/>   <br/><br/>   <br/><br/>   <br/><br/>
     


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
    <br/>


   

    </div>

    </div>
    </div>

    </div>
    );
  }