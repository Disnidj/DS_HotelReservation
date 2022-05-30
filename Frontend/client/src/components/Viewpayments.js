import React, { Component } from  'react';
import axios from 'axios';

export default class Viewpayment extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        Pay: []
      };
    }
    
    componentDidMount(){
      this.retrievepayment();
    }
    
    retrievepayment(){
      axios.get("http://localhost:8000/payment").then(res =>{
        if(res.data.success){
          this.setState({
            Pay:res.data.existingPay
          });
        
          console.log(this.state.Pay)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:8000/payment/delete/${id}`).then((res)=>{
          alert("Delete successfully");
          this.retrievepayment();
            
      })
    }
    

    
  
      render(){
        return (
    
    
    
    
          <div style = {{backgroundColor : "#FFE55C"}}>
            <div>
            <br/>
            <center><h1>Payment Details  <img src="/9.png" class="mx-auto" alt="taxi" width="150px" height="150px" /></h1></center> 
          <br/>

       
       
    <br/>
    <center>
    <table className = "table" style={{backgroundColor: "#FFE55C"}}>
           <thead>
             <tr>
               <th scope = "col">id</th>
               <th scope = "col">Card Holder Name</th>
               <th scope = "col">Card Number</th>
               <th scope = "col">CVC</th>
               <th scope = "col">Amount</th>
              
             </tr>
           </thead>
            <tbody>
    
              {this.state.Pay.map((Pay,index) =>(
                <tr key ={index}>
                  <th scope = "row">{index+1}</th>
                  <td>
                        
                        
            
                 
                            
                  {Pay.travellerName}   
                  </td>
                  <td>{Pay.cardNumber}</td>
                  <td>{Pay.cvc}</td>
                  <td>{Pay.amount}</td>
                
                  <td>
    
    <br/>
    <a className="btn btn-warning" style = {{textDecoration:'none',color:'white'}}  href={`/checkout`}>
                 &nbsp;Confirm payment
                  </a>
                  &nbsp;
          
                 
                      <a className="btn btn-warning" style = {{textDecoration:'none',color:'white'}}  href="/HomeHotel" onClick={()=> this.onDelete(Pay._id)}>
                  &nbsp;Cancel payment
                   
                      </a>

  
               
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

            
          
         </table>
         </center>
         <br/>

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