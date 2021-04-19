import * as Message from '../constants/Message';
import * as types from '../constants/ActionType';
var initialState = Message.MSG_WELCOME;

const messageReducer = (state = initialState,action) => {
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message; // Trả về cái message mà ta khai báo bên actions
        default: return state;
    }
}

export default messageReducer;