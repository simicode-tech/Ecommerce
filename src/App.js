import './App.css';
// import data from './dummyData';
import Header from './component/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import Product from './component/Product/Product';

import ProductDetail from './component/Product/ProductDetail';



function App() {

  return (
      <BrowserRouter>
        <div className="grid-container">
            <Header />
              <Routes>
                <Route path="/" element={<Product />}/>
                    <Route path="/product/:id" element={<ProductDetail />}/>
              </Routes>
            
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
