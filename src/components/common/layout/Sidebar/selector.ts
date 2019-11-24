import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'reducers/index';

const sidebarSelector = (state: RootState) => state?.sidebar;

export const makeSidebarSelector = createSelector(sidebarSelector, (sidebarState) => sidebarState);
