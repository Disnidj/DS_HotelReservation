
import React, { Component } from 'react'
import axios from 'axios';


export default class HotelSignup extends Component {


    
  constructor(props)
  {
    super(props);
    this.state={
      Name: "",
      NationalID:"",
      Email: "",
      UserName:"",
      Password:"",
    
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
     const {Name,NationalID, Email, UserName, Password} = this.state;

     const data ={
      Name : Name,
      NationalID : NationalID,
      Email : Email,
      UserName: UserName,
      Password:Password

   
      
     }
   
    
     axios.post(`http://localhost:8000/hotelregister/save`,data).then((res)=>{
        console.log(data);
         if(res.data.success){
             this.setState(
                 {
                    Name: "",
                    NationalID:"",
                    Email: "",
                    UserName:"",
                    Password:""
                   
                   
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
            <center><h1> ROYAL RISE RESERVATIONS </h1></center> 
<br/>
            <center><h1> Sign Up </h1></center> 
          <br/>
         
          
       

              
          <center>
        <table width = "950px" height = "500px" style={{margin: "20px"}}>
            <tr>
                <th>
     
        <form>
      

        <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}> Name : </label>
                     <input type="text"
                     className="form-control"
                     name="Name"
                     value={this.state.Name}
                     onChange={this.handleInputChange} 
                     placeholder="Enter  name "
               
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
                     <label style={{margineBottom:'5px'}}>Email Address : </label>
                     <input type="text"
                    className="form-control"
                     name="Email"
                     value={this.state.Email}
                     onChange={this.handleInputChange}
                     placeholder="Enter email address"
                 
                     />
                 </div>

             

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>UserName : </label>
                     <input type="text"
                    className="form-control"
                     name="UserName"
                     value={this.state.UserName}
                     onChange={this.handleInputChange}
                     placeholder="Enter a username"
                  
                    />
                 </div>
                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Password : </label>
                     <input type="text"
                     className="form-control"
                     name="Password"
                     value={this.state.Password}
                     onChange={this.handleInputChange}
                     placeholder="create a Password"
                   />
                 </div>
          

               


                 <button className="btn btn-warning" type="submit"style = {{textDecoration:'none',color:'white'}} onClick={this.onSubmit}>
                 <i className="far fa-check-square"></i> Submit </button>&nbsp;

                 <button className="btn btn-warning"><a href = "/" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Go to Login</a></button>
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