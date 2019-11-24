import { SidebarActionTypes, SIDEBAR_SELECTED } from './types';

export const sidebarSelected = ({ selectedKey, collapsed }: any): SidebarActionTypes => ({
    type: SIDEBAR_SELECTED,
    payload: {
        selectedKey,
        collapsed,
    },
});
