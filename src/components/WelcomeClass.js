import React from 'react';
import BTN from './BTN';
// react component Es6 class (OOP)
class WelcomeClass extends React.Component{

  constructor (props){
    console.log("constructor")
    super(props);
  // old
    this.state  = {
      fName : "Youssef",
      lName : "Mohamed"
    }
  }

  // new
  // state = {
  //   fName : "Youssef",
  //   lName : "El-Ogail"
  // }
  render(){
    console.log("render")
    // console.log(this.state)
    // console.log(this.props)
    const love = () => {
      console.log("love React")
    }
    return(
      <>
      <h1>welcome {this.props.name === "FC"? "gest" :this.props.name}</h1>
      <h2>age: {this.props.age}</h2>
      <h3>job title: {this.props.title}</h3>

      <h4>by {this.state.fName} {this.state.lName}</h4>
      <button onClick={() => {
        this.setState({
          lName : "El-Ogail"
        })
      }}>change last name</button>
      <BTN name="click" />
      <button onClick={love}>love</button>
    </>
    )
  }
  componentDidMount(){
    console.log("componentDidMount")
    
  }
}

export default WelcomeClass