import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './components/Shop'
import Product from './components/Product'

function App() {
  return (
  <Router>
      <div className="App">
        <div className="nav">
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>
        <div className="form-container">
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
