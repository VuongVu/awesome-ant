import React, { memo, ReactNode } from 'react';
import NextHead from 'next/head';

import { Layout } from 'antd';

import Sidebar from './Sidebar';

type LayoutProps = {
    children?: ReactNode;
    title?: string;
    hasSider?: boolean;
};

const { Content } = Layout;

export default memo<LayoutProps>(({ title, hasSider = true, children }) => (
    <>
        <NextHead>
            <title>{title || `Awesome`}</title>
        </NextHead>

        <Layout>
            {hasSider && <Sidebar />}
            <Content>{children}</Content>
        </Layout>
    </>
));
