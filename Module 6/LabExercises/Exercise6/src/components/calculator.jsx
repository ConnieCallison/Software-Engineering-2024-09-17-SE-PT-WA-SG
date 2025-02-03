import React, { useState } from 'react';

class Calculator extends React.Component{
  constructor(){
    super();
    this.state={
      firstNumber:"",
      secondNumber:"",
      result: ""
    }
  }
handleFirstNumber = (event) => {
  this.setState({firstNumber:event.target.value})
}
handleSecondNumber = (event) => {
  this.setState({secondNumber:event.target.value})
}


exe = (e) => {
  e.preventDefault();
  this.setState({result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)})
}


  render(){
    return( 
    <div>
      <h1>Calculator</h1>
      <form onSubmit={this.exe}>
      <div>
      First Number Input: 
      <input type="text" value={this.state.firstNumber} onChange={this.handleFirstNumber}/>
      </div>
      <div>
      Second Number Input: 
      <input type="text" value={this.state.secondNumber} onChange={this.handleSecondNumber}/>
      </div>
      <div>
      <button type= "submit"> Add </button>
      </div>
      <div>
      <button type= "submit"> Subtract </button>
      </div>
      </form>
      <input type = "text" name = "name" value = {this.state.total}/>
      </div>
    )
  }

}


export default calculator;