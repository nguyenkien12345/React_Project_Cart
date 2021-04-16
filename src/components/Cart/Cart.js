import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem';
import CartResult from '../CartResult/CartResult';

function Cart() {
  return (
    <section className="section">
      <div className="table-responsive">
        <table className="table product-table">
          <thead>
            <tr>
              <th></th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartItem/>
            <CartResult/>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cart;