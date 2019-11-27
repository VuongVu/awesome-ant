/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { InjectSagaParams, InjectedStore } from 'types/index';

import getInjectors from './sagaInjectors';

export default ({ key, saga, mode }: InjectSagaParams) => {
    const store = useStore() as InjectedStore;

    useEffect(() => {
        const injectors = getInjectors(store);
        injectors.injectSaga(key, { saga, mode });

        return () => {
            injectors.ejectSaga(key);
        };
    }, []);
};
