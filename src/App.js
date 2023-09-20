import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='row container justify-content-between'>
        <div className="col-2 side-bar py-2">
          <SideBar />
        </div>
        <div className="col-9 ">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/add' element={<AddProduct h1="Add new" btn="Add" isAdd={true}/>} />
            <Route path='products/edit/:productId' element={<AddProduct h1="Edit" btn="Edit" isAdd={false} />} />
            <Route path='products/:productId' element={<ProductDetails />} />
        
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
