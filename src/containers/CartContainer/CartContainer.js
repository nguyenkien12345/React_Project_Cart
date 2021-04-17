import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cart from '../../components/Cart/Cart';
import CartItem from '../../components/CartItem/CartItem';
import * as types from '../../constants/Message';
import PropTypes from "prop-types";

function CartContainer(props) {

  CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,          
                name: PropTypes.string.isRequired,        
                description: PropTypes.string.isRequired, 
                image: PropTypes.string.isRequired,       
                price: PropTypes.string.isRequired,       
                inventory: PropTypes.number.isRequired,   
                rating: PropTypes.number.isRequired       
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired
    // products này bắt buộc phải có
    };

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const showCartItem = (cart) => {
    var result = types.MSG_CART_EMPTY;
    if(cart.length > 0)
    { 
      result = cart.map((item,index) => (
          <CartItem key={index} item={item}/>
      ));
    }
    return result;
  }

  return (
    <div>
        {/* Truyền Props dạng children */}
        <Cart>
            {showCartItem(cart)}
        </Cart>
    </div>
  );
}

export default CartContainer;
