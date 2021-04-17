import React, { Component } from 'react';
import Product from '../Product/Product';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import appReducers from '../../reducers/index';

function Products(props) {

  const products = useSelector((state) => state.pruducts);

  const showProducts = (products) => {
    var result = null;
    if(products.length > 0)
    { 
      result = products.map((product,index) => (
          <Product key={index} product={product}/>
      ));
    }
    return result;
  }

  return (
    <div>
      {/* <!-- Products --> */}
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
            {showProducts(products)}
        </div>
      </section>
      {/* <!-- End Products --> */}
    </div>
  );
}

export default Products;