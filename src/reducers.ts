import { combineReducers } from 'redux';

import { reducer as sidebarReducer } from 'components/common/layout/sidebar/slice';

const createReducer = (injectedReducers = {}) => {
    const rootReducer = combineReducers({
        sidebar: sidebarReducer,
        ...injectedReducers,
    });

    return rootReducer;
};

export default createReducer;
