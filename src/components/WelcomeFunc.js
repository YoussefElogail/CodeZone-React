//react component function
import {useState} from 'react';
function WelcomeFunc(props) {
  // console.log(props)
  let [cunt, setCunt] = useState(0);
  return(
    <>
      <h1>welcome {props.name === "FC"? "gest" :props.name}</h1>
      <h2>age: {props.age}</h2>
      <h3>job title: {props.title}</h3>
      <h4>{cunt}</h4>
      <button onClick={() => {
        setCunt(++cunt )
      }}>plus + 1</button>
    </>
  )
}

export default WelcomeFunc