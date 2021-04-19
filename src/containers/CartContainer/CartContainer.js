import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cart from '../../components/Cart/Cart';
import CartItem from '../../components/CartItem/CartItem';
import CartResult from '../../components/CartResult/CartResult';
import * as types from '../../constants/Message';
import {DeleteProductInCart,UpdateProductInCart} from '../../actions';
import {ChangeMessage} from '../../actions/index';
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
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    };

  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const onDeleteProductInCart = (product) =>{
    const action = DeleteProductInCart(product);
    dispatch(action);
  }

  const onUpdateProductInCart = (product,quantity) =>{
    const action = UpdateProductInCart(product,quantity);
    dispatch(action);
  }

  const onChangeMessage = (message) => {
    const action = ChangeMessage(message);
    dispatch(action);
  } 

  const showCartItem = (cart) => {
    var result = <tr>
      <td>{types.MSG_CART_EMPTY}</td>
    </tr>;
    if(cart.length > 0)
    { 
      result = cart.map((item,index) => (
          <CartItem key={index} item={item} onDeleteProductInCart={onDeleteProductInCart} onChangeMessage={onChangeMessage} onUpdateProductInCart={onUpdateProductInCart}/>
      ));
    }
    return result;
  }

  // Tổng tiền giỏ hàng
  const showTotalAmount = (cart) => {
    var result = null;
    if(cart.length > 0)
    {
      result = <CartResult cart={cart}/>
    }
    return result;
  }

  return (
    <div>
        {/* Truyền Props dạng children */}
        <Cart>
            {showCartItem(cart)}
            {showTotalAmount(cart)}
        </Cart>
    </div>
  );
}

export default CartContainer;
