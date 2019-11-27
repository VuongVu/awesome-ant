import React from 'react';
import { NextPage } from 'next';

import Layout from 'components/common/layout';
import Posts from 'components/posts';

const Home: NextPage = () => {
    return (
        <Layout>
            <div>Home Page</div>
            <Posts />
        </Layout>
    );
};

export default Home;
