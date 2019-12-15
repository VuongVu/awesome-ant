import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'types/redux-state';

import { initialState } from './slice';

const sidebarSelector = (state: AppState) => state?.sidebar || initialState;

export const makeSidebarSelector = createSelector(sidebarSelector, (sidebarState) => sidebarState);
