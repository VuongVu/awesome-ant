import React from 'react';
import { NextPage } from 'next';

import { Row } from 'antd';

import Layout from 'components/common/layout';
import LoginForm from 'components/auth/loginForm';

const Login: NextPage = () => {
    return (
        <Layout title="Login" hasSider={false}>
            <Row className="mh-100" type="flex" justify="center" align="middle">
                <LoginForm />
            </Row>
        </Layout>
    );
};

export default Login;
