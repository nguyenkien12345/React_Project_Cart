import * as types from '../constants/ActionType';

export const AddToCart = (product,quantity) => { 
    return{
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const UpdateProductInCart = (product,quantity) => { 
    return{
        type: types.UPDATE_PRODUCT_IN_CART,
        product: product,
        quantity: quantity
    }
}

export const DeleteProductInCart = (product) => { 
    return{
        type: types.DELETE_PRODUCT_IN_CART,
        product: product
    }
}

export const ChangeMessage = (message) => { 
    return{
        type: types.CHANGE_MESSAGE,
        message: message
    }
}