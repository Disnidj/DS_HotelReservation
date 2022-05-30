import React, { Component } from 'react'

export default class Confirmpayment extends Component {
  render() {
    return (
        <div style = {{backgroundColor : "#FFE55C"}}>
          <center>
          <h2> ......You have successfully confirmed your payment.........</h2>
<br/>
          <h2> ......Thank you for being with us.........</h2>

          <br/>
          
          <button className="btn btn-warning"><a href = "/" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Send me a email and massage</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
          </center>
      </div>
    )
  }
}
