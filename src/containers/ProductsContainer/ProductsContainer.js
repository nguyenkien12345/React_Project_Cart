import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Products from '../../components/Products/Products';
import Product from '../../components/Product/Product';
import {AddToCart,ChangeMessage} from '../../actions/index';
import PropTypes from "prop-types";

function ProductsContainer(props) {

  ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        // Kiểm tra từng cái thuộc tính của product
        id: PropTypes.number.isRequired,          // Ràng buộc id kiểu số
        name: PropTypes.string.isRequired,        // Ràng buộc name kiểu string
        description: PropTypes.string.isRequired, // Ràng buộc description kiểu string
        image: PropTypes.string.isRequired,       // Ràng buộc image kiểu string
        price: PropTypes.string.isRequired,       // Ràng buộc id kiểu số
        inventory: PropTypes.number.isRequired,   // Ràng buộc id kiểu số
        rating: PropTypes.number.isRequired       // Ràng buộc id kiểu số
      })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
  };

  const products = useSelector((state) => state.products);
  
  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    const action = AddToCart(product,1);
    dispatch(action);
  }

  const onChangeMessage = (message) => {
    const action = ChangeMessage(message);
    dispatch(action);
  }


  const showProducts = (products) => {
    var result = null;
    if(products.length > 0)
    { 
      result = products.map((product,index) => (
          <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
      ));
    }
    return result;
  }

  return (
    <div>
      {/* Truyền Props dạng children */}
      <Products>
          {showProducts(products)}
      </Products> 
    </div>
  );
}

export default ProductsContainer;

// Giải thích
// ProductsContainer sẽ kết nối lên redux vào store lấy các state về sau đó truyền cái state đó vào cho Products. 
// Trước đây Component phải kết nối lên trên redux và vào store lấy dữ liệu và truyền vào cho chính component đó luôn. 
// Nhưng bây giờ Component sẽ không thực hiện nhiệm vụ connect nữa mà chỉ hiển thị giao diện. 
// Bây giờ Container sẽ trung gian giữa redux và component lên trên store lấy giữ liệu về và thực hiện nhiệm vụ kết nối cũng như mapStateToProps 
// và mapDispatchToProps sau đó truyền vào Component
// Chỗ nào có Products thay bằng ProductsContainer
