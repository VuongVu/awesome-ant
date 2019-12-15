import { combineReducers } from 'redux';

import { reducer as sidebarReducer } from 'components/common/layout/Sidebar/slice';

const createReducer = (injectedReducers = {}) => {
    const rootReducer = combineReducers({
        sidebar: sidebarReducer,
        ...injectedReducers,
    });

    return rootReducer;
};

export default createReducer;
