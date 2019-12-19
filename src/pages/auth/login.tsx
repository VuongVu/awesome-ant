import React from 'react';
import { NextPage } from 'next';

import { Row } from 'antd';

import Layout from 'components/common/layout';
import LoginForm from 'components/auth/loginForm';

import withApollo from 'utils/withApollo';

const Login: NextPage = () => {
    return (
        <Layout title="Login" hasSider={false}>
            <Row className="mh-100" type="flex" justify="center" align="middle">
                <LoginForm />
            </Row>
        </Layout>
    );
};

export default withApollo(Login);
