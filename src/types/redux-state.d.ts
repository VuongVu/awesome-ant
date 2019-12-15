import { reducer as SidebarReducer } from 'components/common/layout/Sidebar/slice';

export interface AppState extends RootState {
    sidebar: ReturnType<typeof SidebarReducer>;
}
