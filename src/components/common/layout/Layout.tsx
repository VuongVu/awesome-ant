import React, { memo, ReactNode } from 'react';
import NextHead from 'next/head';

import { Layout } from 'antd';

import Sidebar from './Sidebar';

type LayoutProps = {
    children?: ReactNode;
    title?: string;
};

export default memo<LayoutProps>(({ title, children }) => (
    <>
        <NextHead>
            <title>{title || `Awesome`}</title>
        </NextHead>

        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar /> {children}
        </Layout>
    </>
));
