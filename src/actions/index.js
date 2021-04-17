import * as types from '../constants/ActionType';

export const AddToCart = (product,quantity) => { 
    return{
        type: types.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}