import { useContext } from "react"
import { TileContext } from '../context/TitleContext';
import { useRecoilState } from "recoil";
import titleState from "../atoms/Title-atom";


const NavBar = (props) => {
  // const value = useContext(TileContext)
  const [value,setValue] = useRecoilState(titleState)

  console.log(value)
  return <div>
    <h1>title cunet: {value.length}</h1>
  </div>
}
export default NavBar