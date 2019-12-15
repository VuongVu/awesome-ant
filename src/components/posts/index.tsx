import React, { useEffect, memo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { AppState } from 'types/redux-state';

import { loadPosts } from './action';
import { makePostsSelector } from './selector';
import reducer, { Post } from './slice';
import saga from './saga';
import { KEY_REDUCER_SAGA } from './constant';

type PostsProps = {
    posts: Post[];
    loadPostList: typeof loadPosts;
};

const Posts = memo(({ posts, loadPostList }: PostsProps) => {
    useInjectReducer({ key: KEY_REDUCER_SAGA, reducer });
    useInjectSaga({ key: KEY_REDUCER_SAGA, saga });

    useEffect(() => {
        loadPostList();
    }, [loadPostList]);

    useEffect(() => {
        posts && console.log(posts);
    }, [posts]);

    return <div>Posts Page</div>;
});

const mapStateToProps = (state: AppState) => ({
    posts: makePostsSelector(state),
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ loadPostList: loadPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
