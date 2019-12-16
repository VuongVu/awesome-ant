import React from 'react';
import { NextPage } from 'next';

import Layout from 'components/common/layout';

const Login: NextPage = () => {
    return (
        <Layout title="Login" hasSider={false}>
            <div>Login Page</div>
        </Layout>
    );
};

export default Login;
