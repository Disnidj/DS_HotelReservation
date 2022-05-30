import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { LoginCustomer } from "../services/AuthServices";

const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		Email: "",
		Password: "",
	});

	const { Email, Password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		let data = await LoginCustomer(formData);
		console.log("data",data);
        if(data.data.token)
        {
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("userRole",data.data.userRole);
            navigate("/Hotel");

        }
        else
        {
            alert("Error occured !  Login credentials wrong...");
        }
	};


	return (
		<div style = {{backgroundColor : "#FFE55C"}}>
			<br/><br/>
			      <center>
      <div style={{marginTop:"30px"}}>
          <center><h1 style={{color:"purple",fontSize:"50px"}}>Welcome to Hotel Room Resevation System</h1></center> 
        </div>
      
		

  
		
        </center>

		
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/Hotel">Home</a>
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
		<br/>
		<div className="login-form">
            <center>
			<h1 className="heading">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign Into Your Account
			</p>
			<br />
			<table>
				<tr>
					<th>
						<form onSubmit={(e) => onSubmit(e)}>
						<div className="form-group" style={{marginBottom:'15px'}}>
						<label style={{margineBottom:'5px'}}>Enter Email Address : </label>
								<input
									type="Email"
									className="form-control" 
									placeholder="Email Address"
									name="Email"
									value={Email}
									onChange={(e) => onChange(e)}
									required
								/>
								</div><br/>
								<div className="form-group" style={{marginBottom:'15px'}}>
								<label style={{margineBottom:'5px'}}>Enter Password : </label>
									<input
										type="password"
										className="form-control" 
										placeholder="Password"
										name="Password"
										minLength="6"
										value={Password}
										onChange={(e) => onChange(e)}
										required
									/>
								</div><br/>
								<input type="submit" className="btn btn-warning" value="Login" />
			</form><br/>
			</th>
			</tr>
			</table>
			<p className="link">
				
			</p>
            </center>
			<br></br><br></br><br></br><br></br><br></br>
		</div>
		</div>
	
	);
};

export default Login;