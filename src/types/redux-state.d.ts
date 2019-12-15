import PostReducer from 'components/posts/slice';

export interface AppState extends RootState {
    posts: ReturnType<typeof PostReducer>;
}
