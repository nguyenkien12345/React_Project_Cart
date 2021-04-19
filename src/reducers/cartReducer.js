import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cartReducer = (state = initialState,action) => {
    var {product,quantity} = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            // console.log(action);
            index = findProductInCart(state, product); // state là danh sách các sản phẩm có trong giỏ hàng, product là sản phẩm ta thêm vào giỏ hàng
            if(index !== -1) // Tìm thấy sản phẩm
            {
                state[index].quantity += quantity;
            }
            else
            {
                state.push({
                    product:product,
                    quantity:quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product); 
            if(index !== -1) // Tìm thấy sản phẩm
            {
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];

        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product); 
            if(index !== -1) // Tìm thấy sản phẩm
            {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
    default: return [...state];
    }
}

const findProductInCart = (cart, product) => {
    var index = -1; // Không tìm thấy
    if(cart.length > 0){
        for(var i = 0; i < cart.length ; i++){
            // Nếu như mà cái cart ở phần tử thứ i có cái id bằng với cái id sảm phẩm mà mình đang mua thì cập nhật cái index ngay tại vị trí đó
            if(cart[i].product.id === product.id)
            {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cartReducer;