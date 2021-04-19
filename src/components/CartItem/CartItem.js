import React, { Component, useState } from 'react';
import {MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS} from '../../constants/Message';

function CartItem(props) {

  // const [quantity, setQuantity] = useState(1);

  var {item,onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} = props;

  const showSubTotal  = (price,quantity) => {
    return price*quantity;
  }
  
  const handleDeleteProductInCart = () => {
    if(onDeleteProductInCart){
      onDeleteProductInCart(item.product); // Vì item chứa cả product và quantity nên ta phải item.product
    }
    if(onChangeMessage){
      onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
  } 

  const handleOnUpdateQuantity = (product,quantity) => { // quantity truyền vào ở đây là quantity đã tăng hoặc giảm
    if(quantity > 0) 
    {
      // setQuantity(quantity) // Cập nhật lại giá trị cho quantity
    }
    if(onUpdateProductInCart)
    {
      onUpdateProductInCart(product,quantity); // product và quantity mới
    }
    if(onChangeMessage){
      onChangeMessage(MSG_UPDATE_CART_SUCCESS);
    }
  }

  return (
    <tr>
      <th scope="row">
        <img src={item.product.image}
          alt={item.product.name} className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        {/* <span className="qty">{item.quantity > 0 ? item.quantity : quantity} </span> Đổ ra state hiện tại */}
        <span className="qty">{item.quantity} </span> 
        <div className="btn-group radio-group" data-toggle="buttons">
          <label 
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick = {() => handleOnUpdateQuantity(item.product,item.quantity - 1)}
          >
            <a>—</a>
          </label>
          <label 
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick = {() => handleOnUpdateQuantity(item.product,item.quantity + 1)}
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{showSubTotal(item.product.price,item.quantity)}$</td>
      <td>
        <button 
          type="button" 
          className="btn btn-sm btn-primary waves-effect waves-light" 
          data-toggle="tooltip" 
          data-placement="top"
          title="" data-original-title="Remove item"
          onClick={() => handleDeleteProductInCart(item.product)}  // Vì item chứa cả product và quantity nên ta phải item.product
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
