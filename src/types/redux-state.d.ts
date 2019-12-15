import { reducer as sidebarReducer } from 'components/common/layout/Sidebar/slice';

export interface AppState extends RootState {
    sidebar: ReturnType<typeof sidebarReducer>;
}