import { createSlice } from '@reduxjs/toolkit';

import * as constants from './constant';

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type State = {
    posts: Post[];
    error: any;
};

export const initialState: State = {
    posts: [],
    error: null,
};

const postsSlice = createSlice({
    name: constants.KEY_REDUCER_SAGA,
    initialState,
    reducers: {
        loadPostsSuccess(state, action) {
            const { posts } = action.payload;
            state.posts = posts;
            state.error = null;
        },
        loadPostsFailure(state, action) {
            const { error } = action.payload;
            state.error = error;
        },
    },
});

export const { loadPostsSuccess, loadPostsFailure } = postsSlice.actions;

export default postsSlice.reducer;
