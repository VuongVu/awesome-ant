import { combineReducers } from 'redux';

const createReducer = (injectedReducers = {}) => {
    const rootReducer = combineReducers({
        ...injectedReducers,
    });

    return rootReducer;
};

export default createReducer;
