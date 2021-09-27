import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartContainer from './containers/CartContainer/CartContainer';
import MessageContainer from './containers/MessageContainer/MessageContainer';
import ProductsContainer from './containers/ProductsContainer/ProductsContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <main id="mainContainer">
        <div className="container">
            <ProductsContainer/>
            <MessageContainer/>
            <CartContainer/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
