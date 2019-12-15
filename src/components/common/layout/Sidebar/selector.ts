import { createSelector } from '@reduxjs/toolkit';

const sidebarSelector = (state: any) => state?.sidebar;

export const makeSidebarSelector = createSelector(sidebarSelector, (sidebarState) => sidebarState);
