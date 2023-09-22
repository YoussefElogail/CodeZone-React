import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import ContextProvider from "./context/TitleContext";


function App() {
  
  return (
    <div className="App">
      {/* <ContextProvider> */}
        <NavBar />
        <Title />
      {/* </ContextProvider> */}
    </div>
  );
}

export default App;
