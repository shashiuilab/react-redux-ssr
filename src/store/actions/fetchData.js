import * as types from '../types';

export const fetchData = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    dispatch({
        type: types.FETCH_DATA,
        payload: data
    });
}