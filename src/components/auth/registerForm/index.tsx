import React, { memo } from 'react';

import { Form, Icon, Input, Button } from 'antd';

const RegisterForm = memo(() => {
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
});

export default Form.create({ name: 'register_form' })(RegisterForm);
