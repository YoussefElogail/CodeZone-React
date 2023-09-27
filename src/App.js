import './App.css';
import NavBar from './components/NavBar';
import { Routes , Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
