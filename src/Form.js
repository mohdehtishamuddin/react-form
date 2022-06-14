import React, { Component } from "react";
import './style.css';
class Form extends Component {
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:"",
            age:"",
            txtname:"",
            nxtname:"",
            agename:""
        }
    }
    // first Name//
    firstnameChange =(event)=>{
        this.setState({
            firstname:event.target.value,
            
        });
    }
    //Last Name//
    lastnameChange =(event)=>{
        this.setState({
            lastname :event.target.value,
        })
    }
    //Age//
    ageChange =(event)=>{
        this.setState({
            age:event.target.value,
        })
    }
    //Button OnClick Event//
    change =(event)=>{
        this.setState({
            txtname:this.state.firstname,
            nxtname:this.state.lastname,
            agename:this.state.age
        });
    }
    
   render(){
        return (
           
            <div>
                {/* First Name */}
                <div className="app">
                <label>Firstname:</label>
                <input type="text"  value={this.state.firstname} onChange={this.firstnameChange}/>
                </div>
                {/* Last Name */}
                <div className="app">
                <label>Lastname:</label>
                <input type="text"  value={this.state.lastname} onChange={this.lastnameChange}/>
                </div>
                {/* Age */}
                <div className="app">
                <label>Age:</label>
                <input type= "number"  value={this.state.age} onChange={this.ageChange}/>
                </div>
                {/* Button */}
                <button onClick={this.change}>Click Me</button>
                {/* Print On web Page */}
                <div className="app">
                    <h1>Entered Information</h1>
               <h1>Your First Name: {this.state.txtname}</h1>
               <h1> Your Last Name: {this.state.nxtname}</h1>
               <h1>Your Age: {this.state.agename}</h1>
            </div>
            </div>
           
             
         
        )
    }
}
export default Form;