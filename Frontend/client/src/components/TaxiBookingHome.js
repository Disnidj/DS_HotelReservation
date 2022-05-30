/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';

export default class TaxiBookingHome extends Component {
  constructor(props){
      super(props);

      this.state={
          taxiDetails:[]
      };
  }
//get details
componentDidMount(){
    this.retrieveTaxiBookingDetails();
}

  retrieveTaxiBookingDetails(){
    axios.get("http://localhost:8000/taxidetails").then(res=>{
        if(res.data.success){
            this.setState({
                taxiDetails:res.data.existingTaxis
            });
            console.log(this.state.taxiDetails);
        }
    });
  }
  
 //delete function

 onDelete = (id)=>{
  axios.delete(`http://localhost:8000/taxi/delete/${id}`).then((res)=>{

    

    this.retrieveTickets();
  })
  alert("Deleted succesfully");
} 




  
    render() {
    return (
      <div style = {{backgroundColor : "#FFE55C"}}>
      <div className='container'>
        <center><h1>TAXI BOOKING DETAILS <img src="/7.png" class="mx-auto" alt="taxi" width="150px" height="150px" /> </h1></center>
        <br></br><br></br>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Customer Number</th>
              <th scope='col'>Customer name</th>
              <th scope='col'>Tel</th>
              <th scope='col'>Vehical Type</th>
              <th scope='col'>Starting Point</th>
              <th scope='col'>Destination Point</th>
              <th scope='col'>Date</th>
              <th scope='col'>Time </th>
              

            </tr>
          </thead>
          <tbody>
              {this.state.taxiDetails.map((taxiDetails,index)=>(
                <tr>
                  <th scope="row"> {index+1}</th>
                
                  <td>{taxiDetails.Customer_name}</td> 
                  <td>{taxiDetails.Customer_tel_number}</td>
                  <td>{taxiDetails.Vehical_type}</td>
                  <td>{taxiDetails.Starting_point}</td>
                  <td>{taxiDetails.Destination_point}</td>
                  <td>{taxiDetails.Date_of_reserve}</td>
                  <td>{taxiDetails.Time_of_reserve}</td>
                 
                  <td>
                  
                    <a className='btn btn-warning' href={`/taxiedit/${taxiDetails._id}`}>
                      <i className='fas fa-edit'></i>&nbsp; Edit
                    </a>
                    </td>
                    <td>
                 
                    <a className='btn btn-warning' href='#'onClick={()=>this.onDelete(taxiDetails._id)}>
                      <i className='far fa-trash-alt'></i>&nbsp; Cancel booking
                    </a>
                    </td>
                    <td>
                   
                    <a className="btn btn-warning" style = {{textDecoration:'none',color:'white'}}  href="/Addpayment">
                      &nbsp;Payment
                      </a>
                  </td>
                </tr>
              
        ))}
          </tbody>
          <br></br><br></br><br></br><br></br>
        </table>

        <button className='btn btn-warning'><a href='/taxiadd' style={{textDecoration:'none', color:'white'}}> Create New Booking</a></button>
        <br></br><br></br><br></br><br></br>
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
    
      </div>
    )
  }
}
