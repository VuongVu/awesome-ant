import React, { memo, useState } from 'react';
import { Divider, Layout, Row, Col } from 'antd';

import AppLayout from 'components/common/layout';

const CreateNote = memo(() => {
  return (
    <AppLayout>
      <Layout>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ margin: '16px 0' }}>
          <Col span={12}>
            <div>Create Note</div>
          </Col>
        </Row>
        <Divider />
      </Layout>
    </AppLayout>
  );
});

export default CreateNote;
