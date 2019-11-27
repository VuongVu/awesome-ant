import { Reducer, Store } from 'redux';

import { RootState } from 'reducers/index';
import PostReducer from 'components/posts/slice';

export interface InjectedStore extends Store {
    injectedReducers: any;
    injectedSagas: any;
    runSaga(saga: (() => IterableIterator<any>) | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
    key: keyof AppState;
    reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
    key: keyof AppState;
    saga: () => IterableIterator<any>;
    mode?: string | undefined;
}

export interface AppState extends RootState {
    posts: ReturnType<typeof PostReducer>;
}
