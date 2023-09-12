import React, { Component } from 'react';

class Input extends Component {

  constructor (props){
    super(props);
    this.state = {
      value : ""
    }
    
    // if i want do method in class normal
    // this.inputType = this.inputType.bind(this)
  }
   inputType = (eo) => {
    console.log(this)
    this.setState({
      value : eo.target.value
    })
  }
  render() {
    return (
      <>
        <input type={this.props.type} placeholder={`enter your ${this.props.type === "text" ? "name" : this.props.type} heer`}  onChange={this.inputType}/>
        <br />
        <p>your {this.props.type === "text" ? "name" : this.props.type} is: {this.state.value}</p>
      </>
    );
  }

}

export default Input;
