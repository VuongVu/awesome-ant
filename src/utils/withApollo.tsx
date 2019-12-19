import React, { Component } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import Head from 'next/head';

import initApollo from './initApollo';
import { isBrowser } from './common';

export default (ComposedComponent: NextComponentType) => {
    return class WithApollo extends Component {
        static async getInitialProps(ctx: NextPageContext) {
            let apolloState = {
                apollo: {
                    data: {},
                },
            };

            let composedInitialProps = {};
            if (ComposedComponent.getInitialProps) {
                composedInitialProps = await ComposedComponent.getInitialProps(ctx);
            }

            if (!isBrowser) {
                const apollo = initApollo({});
                const { asPath, pathname, query } = ctx;

                try {
                    await getDataFromTree(
                        <ApolloProvider client={apollo}>
                            <ComposedComponent {...composedInitialProps} />
                        </ApolloProvider>,
                        {
                            router: {
                                asPath,
                                pathname,
                                query,
                            },
                        },
                    );
                } catch (error) {
                    // eslint-disable-next-line no-console
                    console.error('Error while running `getDataFromTree`', error);
                }

                Head.rewind();

                const state = {};

                apolloState = Object.assign(state, {
                    apollo: { data: apollo.cache.extract() },
                });
            }

            return {
                apolloState,
                ...composedInitialProps,
            };
        }

        apollo: ApolloClient<NormalizedCacheObject>;

        constructor(props: any) {
            super(props);
            this.apollo = initApollo(props.apolloState.apollo.data);
        }

        render() {
            return (
                <ApolloProvider client={this.apollo}>
                    <ComposedComponent {...this.props} />
                </ApolloProvider>
            );
        }
    };
};
