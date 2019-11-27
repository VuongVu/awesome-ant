/* eslint-disable global-require */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import createReducer from 'reducers/index';

const storeConfig = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store: any = configureStore({
        reducer: createReducer(),
        middleware: [sagaMiddleware, ...getDefaultMiddleware()],
    });

    // sagaMiddleware.run(rootSaga);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {};
    store.injectedSagas = {};
    store.replaceReducer(createReducer(store.injectedReducers));

    return store;
};

export default storeConfig;
