import React, { ErrorInfo } from 'react';
import App, { AppProps } from 'next/app';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
// import withReduxSaga from 'next-redux-saga';

import configureStore from '../configureStore';

type MyAppProps = AppProps & {
    store: Store;
};

class MyApp extends App<MyAppProps> {
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        super.componentDidCatch(error, errorInfo);
    }

    public render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(configureStore)(MyApp);
