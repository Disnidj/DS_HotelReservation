
import React, { Component } from 'react';
import axios from 'axios';

  export default class CreateReservation extends Component{

    constructor(props){
      super(props);

      this.state={
        Name:"",
        NIC:"",
        Phone:"",
        Email:"",
        type:"",
        date:""
        
      }
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  

  onSubmit=(e)=>{
      e.preventDefault();

      const {Name,NIC,Phone,Email,type,date} = this.state;

      const data={
          Name:Name,
          NIC:NIC,
          Phone:Phone,
          Email:Email,
          type:type,
          date:date
          
      }

      console.log(data)
      axios.post("http://localhost:8000/travelor/save",data).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              Name :"",
              NIC:"",
              Phone:"",
              Email :"",
              type: "",
              date:""
            }
          )
        }
      })
     
  }




    render() {

        return (
          <div style = {{backgroundColor : "#FFE55C"}}>
            <div className="edit">
       
            <div className="col-md-8 mt-4 mx-auto">
            <div style={{height:'80px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Create Reservations</h2>
                   <br/>
          </div>
                <br/>
                <div >
  
                <form className="row g-3">
  
                    <div className="form-group" >
                        <label for="inputEmail4" className="form-label" >Full Name : </label>
                        <input type="text" className="form-control" name="Name"  value={this.state.Name} placeholder="Enter your full name" onChange={this.handleChange} required></input>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" >NIC : </label>
                        <input type="text" className="form-control" name="NIC" value={this.state.NIC} placeholder="Enter your NIC number" onChange={this.handleChange} required/>
                    </div>
  
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Phone Number : </label>
                        <input type="text" className="form-control" name="Phone" value={this.state.Phone} placeholder="Enter your mobile number" onChange={this.handleChange} required/>
                    </div>
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Email</label>
                        <input type="email" className="form-control" name="Email" value={this.state.Email} placeholder="Enter your personal mail " onChange={this.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Type of Room</label>
                        <input type="text" className="form-control" name="type" value={this.state.type} list="rooms" placeholder="Select the type of room you want to request" onChange={this.handleChange} />
                        <datalist id="rooms">
                          <option value="Room for one - Platinum"></option>
                          <option value="Room for one - Gold"></option>
                          <option value="Room for one - Bronze"></option>
                          <option value="Room for two - Platinum"></option>
                          <option value="Room for two - Gold"></option>
                          <option value="Room for two - Bronze"></option>
                          <option value="Request for any available room"></option>

           
                          </datalist>
                          <div style={{ marginTop:'-20px'}}>
                    <br/>
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Available types of Rooms</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                <th>  <img src="/1.jpg" class="mx-auto" alt="" width="250" height="250"/><p> Room for one Bronze - Rs.10,000/= per day</p></th> 
                  <th> <img src="/2.webp" class="mx-auto" alt="" width="250" height="250"/><p> Room for one Gold - Rs.15,000/= per day</p></th>
                  <th><img src="/3.webp" class="mx-auto" alt="" width="250" height="250"/><p> Room for one Platinum - Rs.25,000/= per day</p></th> </tr>
                  <tr>
                  <th><img src="/4.jpg" class="mx-auto" alt="" width="250" height="250"/><p> Room for two Bronze - Rs.20,000/= per day</p></th> 
                   <th><img src="/5.jpg" class="mx-auto" alt="" width="250" height="250"/><p> Room for one Gold - Rs.30,000/= per day</p></th>
                   <th><img src="/6.webp" class="mx-auto" alt="" width="250" height="250"/><p> Room for one Bronze - Rs.50,000/= per day</p></th>
                   </tr>
              </tbody>
            </table>
                   <br/>
          </div>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Date of the reservation : </label>
                        <input type="date" className="form-control" name="date" value={this.state.date} placeholder="Select the date of booking" onChange={this.handleChange} />
                    </div>
                    
                </form>
                    <div>
                        <hr/>
                        <center>
                        <button className="btn btn-warning" style = {{textDecoration:'none',color:'white'}} onClick={this.onSubmit}>Submit</button>
                        &nbsp;
                        <button className="btn btn-warning"><a href = "/HomeR" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>View Booking</a></button>
                         <i className="far fa-check-square"></i>
                        </center>
                        <br/>
                        <br/>
                    </div>
  
  
                    </div>
                    
            </div>
            </div>
            
            </div>
        )
    }
  }
