import * as types from '../types';

const initialState = {
    todos: null
}

export const fetchData = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_DATA:
            console.log(action.payload, 12424);
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}