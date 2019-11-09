import React, { memo, ReactNode } from 'react';
import NextHead from 'next/head';

import { Layout } from 'antd';
import Footer from './Footer';
import Sider from './Sider';

const { Content } = Layout;

import 'styles/main.less';

interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export default memo(({ title, children }: ILayoutProps) => (
  <>
    <NextHead>
      <title>{title || `That's Awesome :)`}</title>
    </NextHead>

    <Layout className="main-layout">
      <Sider />
      <Layout>
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  </>
));
