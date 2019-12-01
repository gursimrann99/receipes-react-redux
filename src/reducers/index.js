import { combineReducers } from 'redux';
import { SET_RECEIPES } from '../actions';

function receipes(state = [], action) {
    switch (action.type) {
        case SET_RECEIPES:
            return action.items;
        default:
            return state;
    }
}

const rootReducers = combineReducers({receipes});

export default rootReducers;