import { Reducer, Store } from 'redux';

import { RootState } from 'reducers/index';

export interface InjectedStore extends Store {
    injectedReducers: any;
    injectedSagas: any;
    runSaga(saga: (() => IterableIterator<any>) | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
    key: keyof RootState;
    reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
    key: keyof RootState;
    saga: () => IterableIterator<any>;
    mode?: string | undefined;
}
