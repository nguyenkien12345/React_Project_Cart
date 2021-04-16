import React, { Component } from 'react';
import Product from '../Product/Product';

function Products() {
  return (
    <div>
      {/* <!-- Products --> */}
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          <Product/>  
          <Product/>
          <Product/>        
        </div>
      </section>
      {/* <!-- End Products --> */}
    </div>
  );
}

export default Products;
