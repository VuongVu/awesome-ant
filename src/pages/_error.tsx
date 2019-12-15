import React, { memo } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';

import { Button, Result } from 'antd';
import { ResultProps } from 'antd/lib/result';

import { BASE_URL } from 'constants/routes';
import { HttpStatus } from 'constants/http-status';

type ErrorProps = {
    statusCode: number | undefined;
};

type ErrorResultProps = ResultProps;

const ErrorResult = memo<ErrorResultProps>(({ status, title, subTitle }) => (
    <Result
        status={status}
        title={title}
        subTitle={subTitle}
        extra={
            <Button type="primary" onClick={() => Router.push(BASE_URL)}>
                Back Home
            </Button>
        }
    />
));

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
    switch (statusCode) {
        case HttpStatus.NOT_FOUND:
            return (
                <ErrorResult
                    status="404"
                    title="404 - Not Found"
                    subTitle="Sorry, the page you visited does not exist."
                />
            );
        case HttpStatus.FORBIDDEN:
            return (
                <ErrorResult
                    status="403"
                    title="403 - Forbidden"
                    subTitle="You don't have permission to to access. Please contact support to get more information."
                />
            );
        case HttpStatus.INTERNAL_SERVER_ERROR:
            return (
                <ErrorResult
                    status="500"
                    title="500 - Internal Server Error"
                    subTitle="Oops, something went wrong. Please contact support to get more information."
                />
            );

        default:
            return (
                <ErrorResult
                    status="error"
                    title="Unexpected Error"
                    subTitle="An Unexpected Error Occurred. Please contact support to get more information."
                />
            );
    }
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
