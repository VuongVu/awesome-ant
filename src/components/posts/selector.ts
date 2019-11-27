/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'types/index';
import { initialState } from './slice';

export const postsSelector = (state: AppState) => state?.posts || initialState;

export const makePostsSelector = createSelector(postsSelector, (state) => state.posts);
