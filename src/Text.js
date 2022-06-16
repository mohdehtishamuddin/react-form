import React, { Component } from "react";
import './style.css';
class Text extends Component {
    constructor(){
        super()
        this.state={
            areatext: "",
            txt:"",
            var:"",
            count:""
        }
        }
//   var txt:toUpperCase();
    firstnameChange =(event)=>{
        this.setState({
            areatext:event.target.value,
            // var:this.textarea.length,       
        })
    }
    change =(event)=>{
        this.setState({
            txt:this.state.areatext.toUpperCase(),
            var:this.state.areatext.length,
            count:this.state.areatext.split(" ").length
        })
    }
    lower = (event)=>{
        this.setState({
           txt:this.state.areatext.toLowerCase(),
            var:this.state.areatext.length,
            count:this.state.areatext.split(" ").length
            

        })
    }
   render(){
       return(
       
       <div>
        <div className="app">
        <p>Text Area</p>
        <textarea rows="4" value={this.state.areatext} id="users" onChange={this.firstnameChange}>{this.state.txt}</textarea>
      </div> 
      <div className="btn">
      <button onClick={this.change}>UpperCase</button>
      <button onClick={this.lower}>LowerCase</button>
      </div>
      <div className="count">
      <h1>Utility Name: {this.state.txt}</h1>
      <h2>Utility Character:{this.state.var}</h2>
      <h3> word count:{this.state.count}</h3>
      </div>
      </div>
       )
   }
                }

export default Text;
