import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = [
    {
        product:{
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'data:image/jpeg;base64,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',
            description: 'Sản phẩm do Apple sản xuất',
            price: 500,
            inventory: 10, 
            rating: 4
        },
        quantity: 5
    },
    {
        product:{
            id: 2,
            name: 'Samsung Galaxy S7',
            image: 'data:image/jpeg;base64,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',
            description: 'Sản phẩm do Samsung sản xuất',
            price: 400,
            inventory: 15, 
            rating: 3
        },
        quantity: 3
    },
];

const cartReducer = (state = initialState,action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
    }
}

export default cartReducer;