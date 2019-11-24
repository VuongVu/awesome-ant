import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { KEY_REDUCER } from './constant';

type SidebarSelect = {
    selectedKey: string;
};

type SidebarCollapse = {
    collapsed: boolean;
};

type SidebarState = SidebarSelect & SidebarCollapse;

const initialState: SidebarState = {
    selectedKey: '',
    collapsed: true,
};

const sidebarSlice = createSlice({
    name: KEY_REDUCER,
    initialState,
    reducers: {
        sidebarSelected(state, action: PayloadAction<SidebarSelect>) {
            const { selectedKey } = action.payload;
            state.selectedKey = selectedKey;
        },
        sidebarCollapsed(state, action: PayloadAction<SidebarCollapse>) {
            const { collapsed } = action.payload;
            state.collapsed = collapsed;
        },
    },
});

export const { sidebarSelected, sidebarCollapsed } = sidebarSlice.actions;

export default sidebarSlice.reducer;
