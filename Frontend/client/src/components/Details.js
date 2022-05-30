
import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function UpdateDetails()  {

    const[Name, setName] = useState("");
    const[NIC , setNIC] = useState("");
    const[Phone, setPhone] = useState("");
    const[Email, setEmail] = useState("");
    const[type, settype] = useState("");
    const[date, setdate] = useState("");

    
    const id = useParams();
    

  

    const [travelor] = useState({
        Name:"",
        NIC:"",
        Phone:"",
        Email:"",
        type:"",
        date:""
       
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
        console.log("execute onclick");
       
        const formData = new FormData();
   
        formData.append("Name",Name);
        formData.append("NIC",NIC);
        formData.append("Phone",Phone);
        formData.append("Email",Email);
        formData.append("type",type); 
        formData.append("date",date);
        
   
        setName("");
        setNIC("");
        setPhone("");
        setEmail("");
        settype("");
        setdate("");
     
        console.log(formData.get('Name')); 

      
        travelor.Name=formData.get('Name');
        travelor.NIC=formData.get('NIC');
        travelor.Phone=formData.get('Phone');
        travelor.Email=formData.get('Email');
        travelor.type=formData.get('type');
        travelor.date=formData.get('date');
            
 
         console.log(travelor);
      

         console.log(id)
         await axios.put(`http://localhost:8000/travelor/update/${id?.id}`,travelor)
         .then(res=>{
             console.log("return data",res);
            alert("Reservation is updated successfully!!");
         })
         .catch(err=>{
             alert("Failed to update..!!")
             console.log(err);
         });

        }
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/travelor/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setName(res.data.travelor.Name);
                setNIC(res.data.travelor.NIC);
                setPhone(res.data.travelor.Phone);
                setEmail(res.data.travelor.Email);
                settype(res.data.travelor.type);
                setdate(res.data.travelor.date);
           
         })
            .catch(err => console.log(err));
          
          },[]);

    return (
      <div style = {{backgroundColor : "#FFE55C"}}>
        <div>
<div>
         <br/>
            <center><h1>Update the details of the Reservation</h1></center> 
          <br/>


          <center>
        <table width = "950px" height = "500px" style={{margin: "20px"}}>
            <tr>
                <th>
        <form>
          
              
                     <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Full Name of the travelor : </label>
                     <input type="text"
                      className="form-control"
                     name="Name"
                     onChange={e => setName(e.target.value)}
                     value={Name}
                     placeholder="Enter the full name"
                     />
                 </div>
                 
                 
           
                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>NIC : </label>
                     <input type="text"
                         className="form-control"
                     name="NIC"
                     onChange={e => setNIC(e.target.value)}
                     value={NIC}  
                     placeholder="Enter NIC"
                   />
                 </div>
                 
        
              
                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Mobile Number : </label>
                     <input type="text"
                         className="form-control"
                     name="Phone"
                     onChange={e => setPhone(e.target.value)}
                     value={Phone}  
                     placeholder="Enter Mobile Number"
                   
                     />
                 </div>
                

              
            
                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Email : </label>
                     <input type="text"
                         className="form-control"
                     name="Email"
                     onChange={e => setEmail(e.target.value)}
                     value={Email}  
                     placeholder="Enter email address"
                 
                     />
                 </div>
                

           
                
                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Type of room : </label>
                     <input type="text"
                         className="form-control"
                     name="type"
                     onChange={e => settype(e.target.value)}
                     value={type}  
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
                     <label style={{margineBottom:'5px'}}>Date of Reservation : </label>
                     <input type="text"
                         className="form-control"
                     name="date"
                     onChange={e => setdate(e.target.value)}
                     value={date}  
                     placeholder="Enter the date"
                  
                    />
                 </div>
               
                <br/>

                <center>
                 <button className="btn btn-warning"  type="submit" style = {{textDecoration:'none', color:'white'}} onClick={(e)=>changeOnClick(e)}>
                 <i className="far fa-check-square"></i>Update Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
                 <button className="btn btn-warning" ><a href = "/HomeR" style = {{textDecoration:'none', color:'white'}} >Go back to Home Page</a></button>
                 </center>
                 </form>

                </th>
                </tr>
                </table>
                </center>


           

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
        </div></div> 

    );
  }