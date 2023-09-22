import { createContext,useState } from 'react';
import App from '../App';
// export const TileContext = createContext(null);
const ContextProvider = (props) => {
  const [state, setState] = useState([
    { id: 0, title: "title 0" },
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
  ]);
  // return(
  // <TileContext.Provider value={state}>
  //   {props.children}
  //   {/* <App /> */}
  // </TileContext.Provider>
  // )
}

export default ContextProvider
