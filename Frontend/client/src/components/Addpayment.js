
import React, { Component } from 'react'
import axios from 'axios';


export default class Addpayment extends Component {


    
  constructor(props)
  {
    super(props);
    this.state={
        travellerName: "",
        cardNumber:"",
        cvc: "",
        amount:""
        
    
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
     const {travellerName,cardNumber, cvc, amount} = this.state;

     const data ={
        travellerName : travellerName,
        cardNumber : cardNumber,
        cvc : cvc,
        amount : amount,
      
      
     }
    
     axios.post(`http://localhost:8000/payment/save`,data).then((res)=>{
         if(res.data.success){
             this.setState(
                 {
                    travellerName: "",
                    cardNumber:"",
                    cvc: "",
                    amount:""
                    
                   
                   
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
        <hr/>
        <center><h1>Select your payment method <img src="/8.png" class="mx-auto" alt="taxi" width="150px" height="150px" /></h1>
        <button className="btn btn-warning"><a href = "/HomeHotel" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Post-payment</a></button>
                 <i className="far fa-check-square"></i>&nbsp;

                 <button className="btn btn-warning"><a href = "/Addpayment" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}> Pre-payment</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
            <br/>
            </center> 
<hr/>
         <br/>
         <center><h4>if you have selected the prepayment you should pay with card payment</h4></center> 
            <center><h1>Enter your payment details</h1></center> 
          <br/>
         
          
       

              
          <center>
        <table width = "950px" height = "500px" style={{margin: "20px"}}>
            <tr>
                <th>
     
        <form>
      

        <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Card Holder Name : </label>
                     <input type="text"
                     className="form-control"
                     name="travellerName"
                     value={this.state.travellerName}
                     onChange={this.handleInputChange}    
                     placeholder="char holder name"
               
                   />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Card Number : </label>
                     <input type="text"
                     className="form-control"
                     name="cardNumber"
                     value={this.state.cardNumber}
                     onChange={this.handleInputChange}      
                     placeholder="card number"
                   />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>CVC Number : </label>
                     <input type="text"
                        className="form-control"
                     name="cvc"
                     value={this.state.cvc}
                     onChange={this.handleInputChange}
                     placeholder="cvc"
                   
                     />
                 </div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Total payment : </label>
                     <input type="text"
                    className="form-control"
                     name="amount"
                     value={this.state.amount}
                     onChange={this.handleInputChange}
                     placeholder="amount"
                 
                     />
                 </div>

        




                 <button className="btn btn-warning" type="submit"style = {{textDecoration:'none',color:'white'}} onClick={this.onSubmit}>
                 <i className="far fa-check-square"></i> pay </button>&nbsp;

                 <button className="btn btn-warning"><a href = "/Viewpayments" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>View details</a></button>
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