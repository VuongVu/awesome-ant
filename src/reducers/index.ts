import { combineReducers } from 'redux';

import sidebarReducer from 'components/common/layout/Sidebar/slice';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
