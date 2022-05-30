import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function UpdateBookings()  {

    const[TravellerName, setTravellerName] = useState("");
    const[Age , setAge] = useState("");
    const[NationalID, setNationalID] = useState("");
    const[Address, setAddress] = useState("");
    const[ContactNumber, setContactNumber] = useState("");
    const[Email, setEmail] = useState("");
    const[Type, setType] = useState("");
    const[Bookingdate, setBookingdate] = useState("");
    
    const id = useParams();
    

  

    const [hotelreser] = useState({
        TravellerName:"",
        Age:"",
        NationalID:"",
        Address:"",
        ContactNumber:"",
        Email:"",
        Type:"",
        Bookingdate:""
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
        console.log("execute onclick");
       
        const formData = new FormData();
   
        formData.append("TravellerName",TravellerName);
        formData.append("Age",Age);
        formData.append("NationalID",NationalID);
        formData.append("Address",Address);
        formData.append("ContactNumber",ContactNumber); 
        formData.append("Email",Email);
        formData.append("Type",Type);
        formData.append("Bookingdate",Bookingdate);
   
        setTravellerName("");
        setAge("");
        setNationalID("");
        setAddress("");
        setContactNumber("");
        setEmail("");
        setType("");
        setBookingdate("");
        
        console.log(formData.get('TravellerName')); 

      
        hotelreser.TravellerName=formData.get('TravellerName');
        hotelreser.Age=formData.get('Age');
        hotelreser.NationalID=formData.get('NationalID');
        hotelreser.Address=formData.get('Address');
        hotelreser.ContactNumber=formData.get('ContactNumber');
        hotelreser.Email=formData.get('Email');
        hotelreser.Type=formData.get('Type');
        hotelreser.Bookingdate=formData.get('Bookingdate');
            
 
         console.log(hotelreser);
      

         console.log(id)
         await axios.put(`http://localhost:8000/hotelbooking/update/${id?.id}`,hotelreser)
         .then(res=>{
             console.log("return data",res);
            alert("Update Successfull!!");
         })
         .catch(err=>{
             alert("update failed")
             console.log(err);
         });

        }
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/hotelbooking/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setTravellerName(res.data.hotelreser.TravellerName);
                setAge(res.data.hotelreser.Age);
                setNationalID(res.data.hotelreser.NationalID);
                setAddress(res.data.hotelreser.Address);
                setContactNumber(res.data.hotelreser.ContactNumber);
                setEmail(res.data.hotelreser.Email);
                setType(res.data.hotelreser.Type);
                setBookingdate(res.data.hotelreser.Bookingdate);
            
         })
            .catch(err => console.log(err));
          
          },[]);

    return (
        <div>
         <div style = {{backgroundColor : "#FFE55C"}}>

         <br/>
            <center><h1>HOTEL ROOM SERVICE RESERVATION UPDATE</h1></center> 
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
                     onChange={e => setTravellerName(e.target.value)}
                     value={TravellerName}
                     placeholder="Enter Traveller name with initials"
                     />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Age : </label>
                     <input type="text"
                        className="form-control"
                     name="Age"
                     onChange={e => setAge(e.target.value)}
                     value={Age}  
                     placeholder="Enter  age"
                   />
                 </div>

               
        <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Natioal ID : </label>
                     <input type="text"
                        className="form-control"
                     name="NationalID"
                     onChange={e => setNationalID(e.target.value)}
                     value={NationalID}  
                     placeholder="Enter  national identy card number"
                   
                     />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Address : </label>
                     <input type="text"
                        className="form-control"
                     name="Address"
                     onChange={e => setAddress(e.target.value)}
                     value={Address}  
                     placeholder="Enter  permanent resident address"
                 
                     />
                 </div>

           
        <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Contact Number : </label>
                     <input type="text"
                        className="form-control"
                     name="ContactNumber"
                     onChange={e => setContactNumber(e.target.value)}
                     value={ContactNumber}  
                     placeholder="Enter Contact Number"
                   
                     />
                 </div>

                 
        <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Email Address : </label>
                     <input type="text"
                        className="form-control"
                     name="Email"
                     onChange={e => setEmail(e.target.value)}
                     value={Email}  
                     placeholder="Enter Email Address"
                  
                    />
                 </div>

               
                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Type of room : </label>
                     <input type="text"
                         className="form-control"
                     name="Type"
                     onChange={e => setType(e.target.value)}
                     value={Type}  
                     list="rooms"
                     placeholder="Select the type"
                   
                     />
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
                     onChange={e => setBookingdate(e.target.value)}
                     value={Bookingdate} 
                     placeholder="Enter Rooms Reserved Date"
                     
                     />
                 </div>


                 <button className="btn btn-warning" style = {{textDecoration:'none',color:'white'}} type="submit"  onClick={(e)=>changeOnClick(e)}> 
                 <i className="far fa-check-square"></i> UPDATE </button> &nbsp;

                 <button className="btn btn-warning"><a  href = "/ViewBookings" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} >VIEW DETAILS</a></button>

                 </form>
                 </th>
                 </tr>
                 </table>

                </center>
        </div>
        </div>

    );
  }

