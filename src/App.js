import { useState } from "react";
import Wellcom from "./components/Wellcom";
import Gest from "./components/Gest";
import List from "./components/List";
import ProductsLists from "./components/ProductsLists";

import logo from "./logo.svg";
import "./App.css";
import CuntCalss from "./components/CuntCalss";
import CuntFunc from "./components/CuntFunc";

function App() {
  const [isLoggedIN, setIsLoggedIN] = useState(false);

  // let elment =  isLoggedIN ?  <h1>i'm loged in</h1> : <h1>i'm not loged in</h1>

  // let elment;
  // if (isLoggedIN) {
  //   elment = <h1>i'm loged in</h1>
  // }else{
  //   elment = <h1>i'm not loged in</h1>
  // }

  return (
    <div className="App">
      {/* <button onClick={() => setIsLoggedIN(true)}>log-in</button> */}
      {/* {elment} */}
      {/* {isLoggedIN ?  <h1>i'm loged in</h1> : <h1>i'm not loged in</h1>} */}
      {/* {isLoggedIN ? <Wellcom name="youssef"/> : <Gest />} */}
      {/* <List />  */}

      <ProductsLists />

      {/* <CuntCalss /> */}
      {/* <CuntFunc /> */}
    </div>
  );
}

export default App;
