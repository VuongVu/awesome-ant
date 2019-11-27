import { combineReducers } from 'redux';

import sidebarReducer from 'components/common/layout/Sidebar/slice';

const createReducer = (injectedReducers = {}) => {
    const rootReducer = combineReducers({
        sidebar: sidebarReducer,
        ...injectedReducers,
    });

    return rootReducer;
};

export type RootState = ReturnType<ReturnType<typeof createReducer>>;

export default createReducer;
