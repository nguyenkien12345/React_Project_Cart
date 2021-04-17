import React, { Component } from 'react'
import PropTypes from "prop-types";

function Product(props) {

  const {product} = props;

  // Hiển thị đánh giá sao
  const showRating = (rating) => {
    var result = []; // Nếu dùng push thì phải khai báo [] chứ không dùng null hay ''
      for(var i = 1; i <= rating; i++){ // Lấy ra số sao được đánh giá 
        result.push(<i className="fa fa-star"></i>)
      }
      for(var j = 1; j <= (5-rating); j++){ // Lấy ra số sao không được đánh giá
        result.push(<i className="fa fa-star-o"></i>)
      }
    return result;
  }

  return (
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image}
            className="img-fluid" alt={product.name} />
          <a>
            <div className="mask waves-light waves-effect waves-light"></div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a>{product.name}</a>
            </strong>
          </h4>
          <ul className="rating">
            <li>
              {showRating(product.rating)}
            </li>
          </ul>
          <p className="card-text">
              {product.description}
          </p>
          <div className="card-footer">
            <span className="left"> {product.price} </span>
            <span className="right">
              <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
