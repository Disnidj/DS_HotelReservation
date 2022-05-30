
import React, { Component } from 'react'
import axios from 'axios';


export default class RoomsBookingByHotel extends Component {


    
  constructor(props)
  {
    super(props);
    this.state={
      TravellerName: "",
        Age:"",
        NationalID: "",
        Address:"",
        ContactNumber:"",
        Email :"",
        Type :"",
        Bookingdate :"",
    
    }
}

handleInputChange = (e) =>{
     const {name,value} = e.target;
     this.setState({
         ...this.state,
         [name]:value
     })
 }

 onSubmit = (e) =>{
     e.preventDefault();
     const {TravellerName,Age, NationalID, Address, ContactNumber, Email, Type, Bookingdate} = this.state;

     const data ={
      TravellerName : TravellerName,
        Age : Age,
        NationalID : NationalID,
        Address : Address,
        ContactNumber : ContactNumber,
        Email : Email,
        Type: Type,
        Bookingdate:Bookingdate,
      
     }
    
     axios.post(`http://localhost:8000/hotelbooking/save`,data).then((res)=>{
         if(res.data.success){
             this.setState(
                 {
                  TravellerName: "",
                    Age:"",
                    NationalID: "",
                    Address:"",
                    ContactNumber:"",
                    Email :"",
                    Type :"",
                    Bookingdate :"",
                   
                   
                 }
             )
         }
     })

 }






render(){
    return (
        <div>
        <div style = {{backgroundColor : "#FFE55C"}}>

         <br/>
            <center><h1>HOTEL ROOM SERVICE RESERVATION</h1></center> 
          <br/>
         
          
       

              
          <center>
        <table width = "950px" height = "500px" style={{margin: "20px"}}>
            <tr>
                <th>
     
        <form>
      

        <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Traveller Full Name : </label>
                     <input type="text"
                     className="form-control"
                     name="TravellerName"
                     value={this.state.TravellerName}
                     onChange={this.handleInputChange}    
                     placeholder="Enter Traveller name with initials"
               
                   />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Age : </label>
                     <input type="text"
                     className="form-control"
                     name="Age"
                     value={this.state.Age}
                     onChange={this.handleInputChange}      
                     placeholder="Enter  age"
                   />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Natioal ID : </label>
                     <input type="text"
                        className="form-control"
                     name="NationalID"
                     value={this.state.NationalID}
                     onChange={this.handleInputChange}
                     placeholder="Enter  national identy card number"
                   
                     />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Address : </label>
                     <input type="text"
                    className="form-control"
                     name="Address"
                     value={this.state.Address}
                     onChange={this.handleInputChange}
                     placeholder="Enter  permanent resident address"
                 
                     />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Contact Number : </label>
                     <input type="text"
                    className="form-control"
                     name="ContactNumber"
                     value={this.state.ContactNumber}
                     onChange={this.handleInputChange}
                     placeholder="Enter Contact Number"
                   
                     />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Email Address : </label>
                     <input type="text"
                    className="form-control"
                     name="Email"
                     value={this.state.Email}
                     onChange={this.handleInputChange}
                     placeholder="Enter Email Address"
                  
                    />
                 </div>
                 <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{margineBottom:'5px'}}>Type of Rooms : </label>
                        <input type="text"
                         className="form-control" 
                         name="Type" 
                        value={this.state.Type} list="rooms" 
                        placeholder="Select the type of room you want to request" 
                        onChange={this.handleInputChange} />
                        <datalist id="rooms">
                          <option value="Room for one - Platinum"></option>
                          <option value="Room for one - Gold"></option>
                          <option value="Room for one - Bronze"></option>
                          <option value="Room for two - Platinum"></option>
                          <option value="Room for two - Gold"></option>
                          <option value="Room for two - Bronze"></option>
                          <option value="Request for any available room"></option>

           
                          </datalist>
                       </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Reserved Date : </label>
                     <input type="text"
                    className="form-control"
                     name="Bookingdate"
                     value={this.state.Bookingdate}
                     onChange={this.handleInputChange}
                     placeholder="Enter Rooms Reserved Date"
                     
                     />
                 </div>


                 <button className="btn btn-warning" type="submit"style = {{textDecoration:'none',color:'white'}} onClick={this.onSubmit}>
                 <i className="far fa-check-square"></i> Submit </button>&nbsp;

                 <button className="btn btn-warning"><a href = "/ViewBookings" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>View Booking</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
            <br/>
                 
<div>


   <br/><br/>
                 </div>
             </form>
            
             </th>
        </tr>
    </table>
    </center>


</div>
</div>

    );
  }
}