import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { KEY_REDUCER } from './constant';

type SidebarCollapse = {
    collapsed: boolean;
};

type SidebarState = SidebarCollapse;

export const initialState: SidebarState = {
    collapsed: false,
};

const sidebarSlice = createSlice({
    name: KEY_REDUCER,
    initialState,
    reducers: {
        sidebarCollapsed(state, action: PayloadAction<SidebarCollapse>) {
            const { collapsed } = action.payload;
            state.collapsed = collapsed;
        },
    },
});

export const { sidebarCollapsed } = sidebarSlice.actions;

export const { reducer } = sidebarSlice;
