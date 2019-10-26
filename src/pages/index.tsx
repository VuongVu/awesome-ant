import React, { memo } from 'react';
import { NextPage } from 'next';

import Layout from '../components/common/layout';

interface IHomePageProps {}

const HomePage: NextPage<IHomePageProps> = () => {
  return <Layout>HomePage</Layout>;
};

export default memo(HomePage);
