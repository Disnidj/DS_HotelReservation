import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function TaxiBookingEdit()  {


    const[Customer_name , setCustomer_name] = useState("");
    const[Customer_tel_number, setCustomer_tel_number] = useState("");
    const[Vehical_type, setVehical_type] = useState("");
    const[Starting_point, setStarting_point] = useState("");
    const[Destination_point, setDestination_point] = useState("");
    const[Date_of_reserve, setDate_of_reserve] = useState("");
    const[Time_of_reserve, setTime_of_reserve] = useState("");
    
    
    const id = useParams();
    

  

    const [taxibooks] = useState({
                  Customer_name:"",
                  Customer_tel_number:"",
                  Starting_point:"",
                  Destination_point:"",
                  Vehical_type:"",
                  Time_of_reserve:"",
                  Date_of_reserve:""
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
   
       
        const formData = new FormData();
   
        formData.append("Customer_name",Customer_name);
        formData.append("Customer_tel_number",Customer_tel_number);
        formData.append("Starting_point",Starting_point);
        formData.append("Destination_point",Destination_point);
        formData.append("Vehical_type",Vehical_type); 
        formData.append("Time_of_reserve",Time_of_reserve);
        formData.append("Date_of_reserve",Date_of_reserve);
      
   
        setCustomer_name("");
        setCustomer_tel_number("");
        setStarting_point("");
        setDestination_point("");
        setVehical_type("");
        setTime_of_reserve("");
        setDate_of_reserve("");
        
        
        console.log(formData.get('Customer_name')); 

      
        taxibooks.Customer_name=formData.get('Customer_name');
        taxibooks.Customer_tel_number=formData.get('Customer_tel_number');
        taxibooks.Starting_point=formData.get('Starting_point');
        taxibooks.Destination_point=formData.get('Destination_point');
        taxibooks.Vehical_type=formData.get('Vehical_type');
        taxibooks.Time_of_reserve=formData.get('Time_of_reserve');
        taxibooks.Date_of_reserve=formData.get('Date_of_reserve');
        
            
 
         console.log(taxibooks);
      

         console.log(id)
         await axios.put(`http://localhost:8000/taxi/update/${id?.id}`,taxibooks)
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
            axios.get(`http://localhost:8000/taxidetailsone/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setCustomer_name(res.data.taxis.Customer_name);
                setCustomer_tel_number(res.data.taxis.Customer_tel_number);
                setStarting_point(res.data.taxis.Starting_point);
                setDestination_point(res.data.taxis.Destination_point);
                setVehical_type(res.data.taxis.Vehical_type);
                setDate_of_reserve(res.data.taxis.Date_of_reserve);
                setTime_of_reserve(res.data.taxis.Time_of_reserve);
               
            
         })
            .catch(err => console.log(err));

          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[]);

    return (
        <div style = {{backgroundColor : "#FFE55C"}}>
        

        <div>
          <br/><br/>
      
  <center>
        <h1> EDIT YOUR RESERED DETAILS <img src="/7.png" class="mx-auto" alt="taxi" width="150px" height="150px" /> </h1>
  </center>
              
        <center>
        <table width = "950px" height = "400px" style={{margin: "20px", fontSize:'20px'}}>
            <tr>
                <th>
                <form className="row g-3">
                <div className="col-md-6">
                <label className="form-label">Customer Name</label>
                     <input type="text"
                     className="form-control"
                     name="Customer_name"
                     onChange={e => setCustomer_name(e.target.value)}
                     value={Customer_name}
                    
                     />
                 </div>

                 <div className="col-md-6">
                 <label className="form-label">Customer Tel Number </label>
                     <input type="text"
                     className="form-control"
                     name="Customer_tel_number"
                     onChange={e => setCustomer_tel_number(e.target.value)}
                     value={Customer_tel_number}  
                     
                   />
                 </div>

                 <div className="col-md-6">
                 <label className="form-label">Starting Point</label>
                     <input type="text"
                      list="To"
                     className="form-control"
                     name="Starting_point"
                     onChange={e => setStarting_point(e.target.value)}
                     value={Starting_point}  />
                     <datalist id="To">
                     <option value="Hotel"></option>
                     <option value="AirPort"></option>
                     <option value="Colombo fort"></option>
                     <option value="Galle Face"></option>
                   </datalist> 
                     
                   
                    
                 </div>

                 <div className="col-md-6">
                 <label className="form-label">Destination Point</label>
                     <input type="text"
                      list="To"
                     className="form-control"
                     name="Destination_point"
                     onChange={e => setDestination_point(e.target.value)}
                     value={Destination_point}   />
                     <datalist id="To">
              <option value="Hotel"></option>
              <option value="AirPort"></option>
              <option value="Colombo Fort"></option>
              <option value="Galle Face"></option>
            </datalist>
                 </div>

                 <div className="col-md-6">
                 <label className="form-label">Vehical Type</label>
                     <input type="text"
                      list="type"
                     className="form-control"
                     name="Vehical_type"
                     onChange={e => setVehical_type(e.target.value)}
                     value={Vehical_type}  
                     />
                     <datalist id="type">
              <option value="Car"></option>
              <option value="Van"></option>
              <option value="Three-Wheeler"></option>
              
            </datalist>
                 </div>

                 <div className="col-md-6">
                 <label className="form-label">Date</label>
                     <input type="text"
                     className="form-control"
                     name="Date_of_reserve"
                     onChange={e => setDate_of_reserve(e.target.value)}
                     value={Date_of_reserve}  
                     
                  
                    />
                 </div>

                 <div className="col-md-6">
                 <label className="form-label">Time</label>
                     <input type="text"
                     className="form-control"
                        name="Time_of_reserve"
                      onChange={e => setTime_of_reserve(e.target.value)}
                      value={Time_of_reserve} 
                     
                     />
                 </div>

                 


                 
                
                <button className="btn btn-warning" type="submit" style = {{textDecoration:'none',color:'white'}} onClick={(e)=>changeOnClick(e)} >
                    <i className="far fa-check-square"></i>
                        &nbsp; Save
                </button>

                <button className="btn btn-warning"><a href = "/TaxiBookingHome" style = {{textDecoration:'none',color:'white'}}>View</a>
                </button>
                <i className="far fa-check-square"></i>

                   </form>
                 </th>
                </tr>
              </table>
          </center>
<br></br><br></br><br></br>
                
        </div>
        </div>





    );
  }
