import React, { memo } from 'react';

import { Layout, Menu, Icon, Tooltip } from 'antd';

const { Sider } = Layout;

export default memo(() => (
  <Sider collapsible={false} collapsed={false} width={70}>
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1">
        <Tooltip placement="right" title="Notes">
          <Icon type="inbox" style={{ fontSize: '16px' }} />
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="2">
        <Tooltip placement="right" title="Important">
          <Icon type="star" style={{ fontSize: '16px' }} />
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="3">
        <Tooltip placement="right" title="Tags">
          <Icon type="tag" style={{ fontSize: '16px' }} />
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="4">
        <Tooltip placement="right" title="Create note">
          <Icon type="plus-circle" style={{ fontSize: '16px' }} />
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="5">
        <Tooltip placement="right" title="Search">
          <Icon type="search" style={{ fontSize: '16px' }} />
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="6">
        <Tooltip placement="right" title="Work chat">
          <Icon type="wechat" style={{ fontSize: '16px' }} />
        </Tooltip>
      </Menu.Item>
    </Menu>
  </Sider>
));
