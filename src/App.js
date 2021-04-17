import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Message from './components/Message/Message';
import Cart from './components/Cart/Cart';
import ProductsContainer from './containers/ProductsContainer/ProductsContainer';
import CartContainer from './containers/CartContainer/CartContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <main id="mainContainer">
        <div className="container">
            <ProductsContainer/>
            <Message/>
            <CartContainer/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
