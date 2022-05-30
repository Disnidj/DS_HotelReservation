/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';

export default class TaxiBookingAdd extends Component {
 constructor(props){
  super(props);
  this.state={
    Customer_name:"",
    Customer_tel_number:"",
    Starting_point:"",
    Destination_point:"",
    Vehical_type:"",
    Time_of_reserve:"",
    Date_of_reserve:""
 }
}
 
handleInputChange= (e)=>{
  const {name,value} = e.target;
  let nam = e.target.name;
  let val = e.target.value;

  if (nam=== "Customer_name") {
        
    if (Number(val)) {
      alert("Invalid input");
    }
  }



  if (nam=== "Customer_tel_number") {
        
    if (!Number(val)) {
      alert("Phone number must be a number");
    }
  }

  if(nam==="Customer_tel_number"){
    if(val.length > 10){
        alert("Invalid length!!");
    }
}
   

  this.setState({
      ...this.state,
      [name]:value
  })
}
 

onSubmit = (e) =>{

  e.preventDefault();

  const {Customer_name,Customer_tel_number,Starting_point,Destination_point,Vehical_type,Time_of_reserve,Date_of_reserve}= this.state;
  
  const data ={
      Customer_name:Customer_name,
      Customer_tel_number:Customer_tel_number,
      Starting_point:Starting_point,
      Destination_point:Destination_point,
      Vehical_type:Vehical_type,
      Time_of_reserve:Time_of_reserve,
      Date_of_reserve:Date_of_reserve
  }

  console.log(data)

//save details
  axios.post('http://localhost:8000/taxi/save',data).then((res)=>{
        if(res.data.success){
            this.setState(
                {
                  Customer_name:"",
                  Customer_tel_number:"",
                  Starting_point:"",
                  Destination_point:"",
                  Vehical_type:"",
                  Time_of_reserve:"",
                  Date_of_reserve:""
                    

                }
            )
            alert("You are saving the details");
            
            
        }
       
    })
}



  render() {
    return (
      <div style = {{backgroundColor : "#FFE55C"}}>
      <div>
        
        
<div className="col-md-8 mt-4 mx-auto">

<br></br>

<h1>Looking for a Taxi? <img src="/7.png" class="mx-auto" alt="taxi" width="150px" height="150px" /> </h1>

<h1>BOOK YOUR TAXI HERE</h1>

<form className="row g-3">


  <div className="col-md-6">
    <label className="form-label">Customer Name : </label>
    <input type="text" 
           className="form-control" 
           name="Customer_name"
           placeholder="Enter full name"
           value={this.state.Customer_name}
           onChange={this.handleInputChange} required/>
  </div>

  <div className="col-md-6">
    <label className="form-label">Phone Number :</label>
    <input type="text" 
           className="form-control" 
           name="Customer_tel_number"
           placeholder="Enter your phone number"
           value={this.state.Customer_tel_number}
           onChange={this.handleInputChange}/>
  </div>
  
  <div className="col-md-6">
     <label className="form-label" >Starting Point :</label>
     <input type="text"
            list="To"
            className="form-control"
            name="Starting_point" 
           placeholder="Select your location"              
            value={this.state.Starting_point}
            onChange={this.handleInputChange} required/>
            <datalist id="To">
              <option value="Hotel"></option>
              <option value="AirPort"></option>
              <option value="Colombo fort"></option>
              <option value="Galle Face"></option>
            </datalist>
  </div>

  <div className="col-md-6">
     <label className="form-label" >Destination Point :</label>
     <input type="text"
            list="To"
            className="form-control"
            name="Destination_point"  
           placeholder="select your destination point"             
            value={this.state.Destination_point}
            onChange={this.handleInputChange} required/>
            <datalist id="To">
              <option value="Hotel"></option>
              <option value="AirPort"></option>
              <option value="Colombo Fort"></option>
              <option value="Galle Face"></option>
            </datalist>
  </div>

  <div className="col-md-6">
     <label className="form-label" >Vehical Type :</label>
     <input type="text"
            list="type"
            className="form-control"
            name="Vehical_type" 
           placeholder="Select type of a vehical "              
            value={this.state.Vehical_type}
            onChange={this.handleInputChange} required/>
            <datalist id="type">
              <option value="Car"></option>
              <option value="Van"></option>
              <option value="Three-Wheeler"></option>
              
            </datalist>
  </div>
  
  
  <div className="col-md-4">
    <label  className="form-label">Date :</label>
    <input type="date" className="form-control" name="Date_of_reserve"
           value={this.state.Date_of_reserve}
           onChange={this.handleInputChange}/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Time :</label>
    <input type="time" className="form-control" name="Time_of_reserve"
           value={this.state.Time_of_reserve}
           onChange={this.handleInputChange}/>
  </div>
 
  <div className="col-12">
  <button className="btn btn-warning"
          type="submit" 
          style = {{textDecoration:'none',color:'white'}} 
          onClick={this.onSubmit} >
          <i className="far fa-check-square"></i>
              &nbsp; Save

              </button>&nbsp;

              <button className="btn btn-warning">
                <a href = "/TaxiBookingHome" style = {{textDecoration:'none',color:'white'}}>
                  View</a>
                  </button>
                 <i className="far fa-check-square"></i>
  </div>
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
</form>



      </div>
      </div>

      
      </div>
       
       
    )
  }
}
