export const SIDEBAR_SELECTED = 'SIDEBAR_SELECTED';

export type SidebarSelected = {
    type: typeof SIDEBAR_SELECTED;
    payload: {
        selectedKey: string;
        collapsed: boolean;
    };
};

export type SidebarActionTypes = SidebarSelected;
