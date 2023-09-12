import { useState } from "react";
//  func component
// const Form = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [genderd, setGenderd] = useState("");
//   const setHandlerFUNC = (setStateName,e) => {
//     setStateName(e.target.value)
//   }

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault()
//       console.log("form submited")
//       console.log({
//         name,
//         password,
//         genderd
//       })

//     }}>
//       <label>Name</label>
//       <input type="text" placeholder='your name' onChange={(e) => {
//         setHandlerFUNC(setName,e)
//       }}/>
//       <br />
//       <label>Password</label>
//       <input type="password" placeholder='your password' onChange={(e) => {
//         setHandlerFUNC(setPassword,e)
//       }}/>
//       <br />
//       <label>Gender</label>
//       <select onChange={(e) => {
//         setHandlerFUNC(setGenderd,e)
//       }}>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>
//       <button type="submit">submit</button>
//     </form>
//   );
// }

// class component
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      gender: "",
    };
  }
  render() {
    const name = (e) => {
      this.setState({name : e})
    }
    const password = (e) => {
      this.setState({password : e})
    }
    const gender = (e) => {
      this.setState({gender : e})
    }
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submited");
          console.log(this.state);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="your name"
          onChange={(e) => {
            name(e.target.value)
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="your password"
          onChange={(e) => {
            password(e.target.value);
          }}
        />
        <br />
        <label>Gender</label>
        <select
          onChange={(e) => {
            gender(e.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
