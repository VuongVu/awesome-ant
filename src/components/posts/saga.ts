import { put, take, fork, call } from 'redux-saga/effects';

import * as constants from './constant';
import { loadPosts } from './service';
import { loadPostsSuccess } from './slice';

function* getListPosts() {
    while (true) {
        yield take(constants.LOAD_POSTS);
        const result = yield call(loadPosts);
        if (result) {
            yield put(loadPostsSuccess({ posts: result }));
        }
    }
}

export default function* root() {
    yield fork(getListPosts);
}
