import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';

import createReducer from './reducers';

declare const module: any;

export default (initialState = {}) => {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const { run: runSaga } = sagaMiddleware;

    const middlewares = [sagaMiddleware];

    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga,
        }),
    ];

    const store = configureStore({
        reducer: createReducer(),
        preloadedState: initialState,
        middleware: [...getDefaultMiddleware(), ...middlewares],
        enhancers,
    });

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            forceReducerReload(store);
        });
    }

    return store;
};
