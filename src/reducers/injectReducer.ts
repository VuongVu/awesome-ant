/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { InjectReducerParams, InjectedStore } from 'types/index';
import getInjectors from './reducerInjectors';

export default ({ key, reducer }: InjectReducerParams) => {
    const store = useStore() as InjectedStore;

    useEffect(() => {
        getInjectors(store).injectReducer(key, reducer);
    }, []);
};
