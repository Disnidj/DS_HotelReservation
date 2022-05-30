import React, { Component } from  'react';
import axios from 'axios';

export default class ViewBookings extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        hotelreser: []
      };
    }
    
    componentDidMount(){
      this.retrieveHotelBooking();
    }
    
    retrieveHotelBooking(){
      axios.get("http://localhost:8000/hotelbooking").then(res =>{
        if(res.data.success){
          this.setState({
            hotelreser:res.data.existingHotelBooking
          });
        
          console.log(this.state.hotelreser)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:8000/hotelbooking/delete/${id}`).then((res)=>{
          alert("Delete successfully");
          this.retrieveHotelBooking();
            
      })
    }
    

    
  
      render(){
        return (
    
    
    
    
          <div style = {{backgroundColor : "#FFE55C"}}>
            <div>
            <br/>
            <center><h1>HOTEL ROOM SERVICE RESERVATION DETAILS</h1></center> 
          <br/>

          <hr/>
          <center>
          <h4>View the reservation details</h4>
          <button className="btn btn-warning"><a  href = "/ViewBookings" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} > BY HOTEL</a></button>
          &nbsp;   &nbsp;   &nbsp;
          <button className="btn btn-warning"><a  href = "/HomeR" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} > BY TRAVELER </a></button>
          </center>
       
    <br/>
    <center>
    <table className = "table" style={{backgroundColor: "#FFE55C"}}>
           <thead>
             <tr>
               <th scope = "col">id</th>
               <th scope = "col">Traveller Name</th>
               <th scope = "col">Age</th>
               <th scope = "col">NationalID</th>
               <th scope = "col">Address</th>
               <th scope = "col">Contact Number</th>
               <th scope = "col">Email Address</th>
               <th scope = "col">Type of Rooms</th>
               <th scope = "col">Reserved Date</th>
             </tr>
           </thead>
            <tbody>
    
              {this.state.hotelreser.map((hotelreser,index) =>(
                <tr key ={index}>
                  <th scope = "row">{index+1}</th>
                  <td>
                        
                        
            
                 
                            
                  {hotelreser.TravellerName}   
                  </td>
                  <td>{hotelreser.Age}</td>
                  <td>{hotelreser.NationalID}</td>
                  <td>{hotelreser.Address}</td>
                  <td>{hotelreser.ContactNumber}</td>
                  <td>{hotelreser.Email}</td>
                  <td>{hotelreser.Type}</td>
                  <td>{hotelreser.Bookingdate}</td>
                  <td>
    
    <br/>
    <a className="btn btn-warning" style = {{textDecoration:'none',color:'white'}}  href={`/UpdateBookings/${hotelreser._id}`}>
                 &nbsp;Edit
                  </a>
                  &nbsp;
          
                 
                      &nbsp;
                      <a className="btn btn-warning" style = {{textDecoration:'none',color:'white'}}  href="/ViewBookings" onClick={()=> this.onDelete(hotelreser._id)}>
                  &nbsp;Delete
                      </a>

                      &nbsp;
                      <a className="btn btn-warning" style = {{textDecoration:'none',color:'white'}}  href="/Addpayment">
                  &nbsp;Payment
                      </a>
                    
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

            <button className="btn btn-warning"><a  href = "/" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} > NEW RESERVATION</a></button>

          
         </table>
         </center>
         <br/>

         </div>
         

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
         

         
        )
    }
    
    }