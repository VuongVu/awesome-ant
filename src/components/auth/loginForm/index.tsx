import React, { memo } from 'react';
// import gql from 'graphql-tag';

import { Form, Icon, Input, Button } from 'antd';

const LoginForm = memo(() => {
    return (
        <>
            <Form>
                <Form.Item>
                    <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
});

// const allUsersQuery = gql`
//     query getAllUsers {
//         getAllUsers {
//             id
//             fullName
//             email
//             role
//             status
//             createdAt
//             updatedAt
//         }
//     }
// `;

// export default graphql(allUsersQuery, {
//     props: ({ data }) => ({ data }),
// })(LoginForm);

export default LoginForm;
