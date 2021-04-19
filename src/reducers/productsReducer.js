var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'data:image/jpeg;base64,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',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10, // Sản phẩm tồn kho
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: 'data:image/jpeg;base64,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',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15, // Sản phẩm tồn kho
        rating: 3
    },
    {
        id: 3,
        name: 'HUAWEI P40',
        image: 'data:image/jpeg;base64,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',
        description: 'Sản phẩm do China sản xuất',
        price: 300,
        inventory: 5, // Sản phẩm tồn kho
        rating: 5
    }
];

const productsReducer = (state = initialState,action) => {
    switch(action.type){
        default: return [...state]; 
    }
}

export default productsReducer;