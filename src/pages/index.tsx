import React, { memo } from 'react';
import { NextPage } from 'next';

import { Card } from 'antd';
import Layout from '../components/common/layout';

interface IHomePageProps {}

const HomePage: NextPage<IHomePageProps> = () => {
  return (
    <Layout>
      <Card title="Default size card" style={{ width: 300, margin: 20 }}>
        <p>Card content</p>
      </Card>
    </Layout>
  );
};

export default memo(HomePage);
