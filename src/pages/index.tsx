import React, { memo } from 'react';
import { NextPage } from 'next';
import { Button } from '@blueprintjs/core';

import Layout from 'components/common/layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <div>Home Page</div>
      <Button className="docs-wiggle" icon="refresh">
        {'Click to wiggle'}
      </Button>
    </Layout>
  );
};

export default memo(HomePage);
