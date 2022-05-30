import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {RegisterCustomer} from '../services/AuthServices';

const Register = () => {

  const navigate = useNavigate();

  const [Name, setName] = useState('');
  const [NationalID, setNationalID] = useState('');
  const [Email, setEmail] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

 
 

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNationalID = (e) => {
    setNationalID(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Name === '' || NationalID === '' || Email === ''|| UserName === '' || Password === '' ) {
        alert("Fill all the data");
    } else {
        let newdata = {
          
          Name:Name,
          NationalID:NationalID,
          Email:Email,
          UserName:UserName,
          Password:Password
        }
        let cusdata =  await RegisterCustomer(newdata);
        console.log("return data",cusdata);
        localStorage.setItem("token",cusdata.data.token);
        localStorage.setItem("userRole",cusdata.data.userRole);
        navigate('/Login');
    }
  };
 


  return (
    <div style = {{backgroundColor : "#FFE55C"}}>
            <center>
      <div style={{ height:'80px'}}>
          <center><h1 style={{color:"purple", fontSize:'50px'}}><b>Welcome to Royal Rise Hotel</b></h1></center> 
        </div>
        <br/>
          
        </center>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/Home">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">

                
                   
                  {/* Hotel staff Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "Hotelstaff" ?"flex":"none"}} className="nav-link active" href="/bookings" aria-current="page">Add Resevation</a>  
                  <a style={{display:localStorage.getItem("userRole") == "Hotelstaff" ?"flex":"none"}} className="nav-link active" href="/ViewBookings" aria-current="page">All Resevation</a>  
                  <a style={{display:localStorage.getItem("userRole") == "Hotelstaff" ?"flex":"none"}} className="nav-link active" href="/taxiadd" aria-current="page"> Taxi Reservation</a>   
                  <a style={{display:localStorage.getItem("userRole") == "Hotelstaff" ?"flex":"none"}} className="nav-link active" href="/TaxiBookingHome" aria-current="page">All Taxi reservations</a> 
                  {/* Travellers' Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "traveller" ?"flex":"none"}} className="nav-link active" href="/add" aria-current="page">Room Reservation</a>  
                  <a style={{display:localStorage.getItem("userRole") == "traveller" ?"flex":"none"}} className="nav-link active" href="/taxiadd" aria-current="page">Add taxi</a>  
                  <a style={{display:localStorage.getItem("userRole") == "traveller" ?"flex":"none"}} className="nav-link active" href="/Addpayment" aria-current="page">Payments</a> 
                  <a style={{display:localStorage.getItem("userRole") == "traveller" ?"flex":"none"}} className="nav-link active" href="/Location" aria-current="page">Hotel Location</a> 
                 </div>
                </div>
             </div>
          </nav>
      <div>
        <br/><br/>
            <center>
              <h1 style={{color:""}}>Registration</h1>
              <br/><br/>
              <form>
              <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>  Name : </label><br/>
                  <input onChange={handleName} className="input"   
                  value={Name} type="text"  /><br/></div>
          
                   <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>  Nationa ID : </label><br/>
                  <input onChange={handleNationalID} className="input"
                  value={NationalID} type="text" /><br/></div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>  Email Address : </label><br/>
                  <input onChange={handleEmail} className="input"
                  value={Email} type="Email" /><br/></div>
          
                    <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}> Enter a  User Name : </label><br/>
                  <input onChange={handleUserName} className="input"
                  value={UserName} type="text" /><br/></div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>  Enter a Password (atleast 6 characters): </label><br/>
                  <input onChange={handlePassword} className="input"
                  value={Password} type="password" /><br/></div>
          
                  <button onClick={handleSubmit} className="btn btn-primary" type="submit">
                  Register
                  </button>
              </form>        
              <br/>
              <p className="link">
                Already have an account? <Link to="/Login" className="btn btn-warning">Sign Up</Link>
              </p> 
            </center>
            <br></br>
      </div>
    </div>
  )
};

export default Register;