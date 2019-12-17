import { reducer as sidebarReducer } from 'components/common/layout/sidebar/slice';

export interface AppState extends RootState {
    sidebar: ReturnType<typeof sidebarReducer>;
}
