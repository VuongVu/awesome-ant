import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

import { GRAPHQL_SERVER_URL } from 'constants/env';

import { isBrowser } from './common';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

if (!isBrowser) {
    (global as any).fetch = fetch;
}

const create = (initialState: any) => {
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser,
        link: new HttpLink({
            uri: GRAPHQL_SERVER_URL,
            credentials: 'same-origin',
        }),
        cache: new InMemoryCache().restore(initialState || {}),
    });
};

export default (initialState: any) => {
    if (!isBrowser) {
        return create(initialState);
    }

    if (!apolloClient) {
        apolloClient = create(initialState);
    }

    return apolloClient;
};
