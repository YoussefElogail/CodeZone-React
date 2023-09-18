import About from "./components/About";
import NavBar from "./components/NavBar";
import ProductDetalis from "./components/ProductDetalis";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:ProductId" element={<ProductDetalis />} />
      </Routes>
    </div>
  );
}

export default App;
