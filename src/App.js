import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
// import { deposite, withdraw } from './store/actions/bank-actions';
import Products from './components/Products';
import { deposite, withdraw } from './rtk/slices/bank-slice';

function App() {
  const state =   useSelector(state => state.bank)
  console.log(state)
  const dispatch = useDispatch()
  // console.log(state)
  return (
    <div className="App">
      <h1>bank palnce acunte : {state}</h1>
      <button onClick={()=> dispatch(withdraw(100))}>withdraw</button>
    <button onClick={() => dispatch(deposite(100))}>deposite</button>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Products />
    </div>
  );
}

export default App;
