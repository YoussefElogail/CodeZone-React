import React, { Component } from 'react';

class CuntCalss extends Component {

  constructor(props){
    super(props)
    this.state = {
      cunt : 0
    }
  }
  plus = () => {
    this.setState({
      cunt : this.state.cunt + 1
    })
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    
  }

  componentWillUnmount(){

  }

    render() {
    
    return (
      <>
        <h1>cunt is: {this.state.cunt}</h1>
        <button onClick={this.plus}>+</button>
      </>
    );
  }
}

export default CuntCalss;
