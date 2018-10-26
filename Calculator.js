import React, {Component} from "react";

export default class Calculator extends Component{

    constructor(){
        super();
        this.state={
            input: ''
        }
         this.inputnum=(e) => this.setState({
            input: this.state.input +e.target.value
        });
        this.op=(e) => this.setState({
            input: this.state.input +e.target.value
        });
         this.equate=(e) => this.setState({
            input:eval(this.state.input)
        });
    }
    render(){
        return(

            <div>  
                <p>{this.state.input}</p>
           <button onClick={this.inputnum} value ='1'> 1 </button>
           <button onClick={this.inputnum} value ='2'> 2 </button>
           <button onClick={this.inputnum} value ='3'> 3 </button>
           <button onclick={this.inputnum} value ='4'> 4 </button>
           <button onClick={this.inputnum} value ='5'> 5 </button>
           <button onClick={this.inputnum} value ='6'> 6 </button>
           <button onClick={this.inputnum} value ='7'> 7 </button>
           <button onClick={this.inputnum} value ='8'> 8 </button>
           <button onClick={this.inputnum} value ='9'> 9 </button>
            <button onClick={this.op} value ='+'>+</button>
            <button onClick={this.op} value ='-'>-</button>
        <button onClick={this.op} value ='*'>*</button>
        <button onClick={this.op} value ='/'>/</button>
            <button onClick={this.equate} value ='='>=</button>
            </div>
        )}
}