import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      travelors:[]
    };
  }

  componentDidMount(){
    this.retriveTravelors();
  }

retriveTravelors(){
  axios.get("http://localhost:8000/travelors").then(res=>{
    if(res.data.success){
      this.setState({
        travelors:res.data.existingTravelors
      });
      console.log(this.state.travelors)
    }
  });
}


onDelete = (id) =>{

  axios.delete(`http://localhost:8000/travelor/delete/${id}`).then((res) =>{
    alert("Deleted successfully!");
    this.retriveTravelors();
  })
}

filterData(travelors,searchKey){
  const result = travelors.filter((travelor) =>
  travelor.Name.toLowerCase().includes(searchKey)||
  travelor.NIC.toLowerCase().includes(searchKey)
  )

  this.setState({travelors:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/travelors").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingTravelors,searchKey)
    }
  });
}


  render() {
    return (

      <div style = {{backgroundColor : "#FFE55C"}}>
      <div className='container'>

        <p>All Reservations</p>
        <br/>
        <button type="button"> <a href={'/add'}>
          &nbsp;&nbsp;&nbsp;&nbsp;Click here to create a Reservation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            </a></button>
            <br/>
          {/* {this.state.travelors.map(travelors=>(
            <div>
                <p>{travelors.Name}</p>
                <p>{travelors.NIC}</p>
                <p>{travelors.Phone}</p>
                <p>{travelors.Email}</p>
                <p>{travelors.type}</p>
                <p>{travelors.date}</p>
              </div>
          ))} */}
          <br/>
           <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="search for your reservation"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
      <table className='table'>

          <thead>
          <tr>
          <th scope='col'>Count</th>
          <th scope='col'>Travelor's Name</th>
          <th scope='col'>NIC</th>
          <th scope='col'>Phone No.</th>
          <th scope='col'>Email</th>
          <th scope='col'>Type of reservation</th>
          <th scope='col'>Date of booking</th>
          <th scope='col'>Cancel Request</th>
          <th scope='col'>Payment</th>

          </tr>

          </thead>
          <tbody>

          {this.state.travelors.map((travelors,index)=>(
            <tr>
              <th scope='row'>{index+1}</th>
              <td>
              <a href={`/Details/${travelors._id}`} style={{textDecoration:'none'}}>{travelors.Name}</a></td>
              <td>{travelors.NIC}</td>
              <td>{travelors.Phone}</td>
              <td>{travelors.Email}</td>
              <td>{travelors.type}</td>
              <td>{travelors.date}</td>
              <td>
              <a className="btn btn-warning" href='/HomeR' onClick={() =>this.onDelete(travelors._id)}>
              &nbsp;Cancel reservation
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

          

      </table>


      
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
