import React, { Component } from 'react';

function Products(props) {

  {/* Nhận Props dạng children */}
  var {children} = props;

  return (
    <div>
      {/* <!-- Products --> */}
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
            {children}
        </div>
      </section>
      {/* <!-- End Products --> */}
    </div>
  );
}

export default Products;