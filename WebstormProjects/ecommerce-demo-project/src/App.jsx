import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Account from './pages/Account/Account';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          {/* Add other routes here as we build more pages */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
