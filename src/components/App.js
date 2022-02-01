import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './header/Header';
import Footer from './footer/Footer';

import Product from '../pages/product/Product';
import { useEffect } from 'react';


function App() {

  return (
    <div className="App bg-dark text-light">
      <Header />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
