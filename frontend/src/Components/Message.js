import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message :'Welcome to Visitor Management System'
      }
    }

    changeMessage()
    {
     this.setState({
         message:'Thank You For Booking Tickets!!!'
     })
    }
     
  render() {
    return (
      <div>
        <center>
            <h1> {this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </center>
      </div>
    )
  }

  }
  
  


export default Message