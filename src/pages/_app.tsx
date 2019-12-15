import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
// import withReduxSaga from 'next-redux-saga';

import configureStore from 'src/configureStore';

class MyApp extends App<any> {
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
