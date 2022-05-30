
import React, { Component } from 'react'
//import axios from 'axios';


export default class HotelLogin extends Component {

  




    
 
render(){
    return (
        <div>
        <div style = {{backgroundColor : "#FFE55C"}}>

         <br/>
            <center><h1>Royal Rise Reservations</h1></center> 

<br/>
            <center><h1>SIGN IN</h1></center> 
            <center><h1>For Traveller</h1></center> 
          
         
          
       

              
          <center>
        <table width = "500px" height = "500px" style={{margin: "20px"}}>
            <tr>
                <th>
     
        <form>
      

        <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>UserName: </label>
                     <input type="text"
                     className="form-control"
                     name="UserName"
                     
                     placeholder="Enter UserName"
                     
               
                   />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Password : </label>
                     <input type="text"
                     className="form-control"
                     name="Password"
                     
                     placeholder="Enter  Password"
                     
                   required />
                 </div>

                


             

                 <button className="btn btn-warning"><a href = "/HomeHotel" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Login</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
            <br/>

            <h4><a href = "/HotelSignup" style = {{color:'black',marginTop:'15px'}}>Create New Account</a></h4>
               
                 
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