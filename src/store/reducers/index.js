import { combineReducers } from 'redux';
import { fetchData } from './fetchData';

const reduxState = combineReducers({
    fetchData
});

export default reduxState;