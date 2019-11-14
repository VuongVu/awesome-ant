import React, { memo, useState } from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';

const { Sider } = Layout;

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = (state: boolean) => setCollapsed(state);

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        width={150}>
        <div className="avatar">
          <Avatar
            style={{ backgroundColor: '#00A2AE', verticalAlign: 'middle' }}
            size="large">
            Vũ
          </Avatar>
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="inbox" style={{ fontSize: '16px' }} />
            <span>Notes</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="star" style={{ fontSize: '16px' }} />
            <span>Important</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="tag" style={{ fontSize: '16px' }} />
            <span>Tags</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="plus-circle" style={{ fontSize: '16px' }} />
            <span>Create note</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="search" style={{ fontSize: '16px' }} />
            <span>Search</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="wechat" style={{ fontSize: '16px' }} />
            <span>Work chat</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <style jsx>{`
        .avatar {
          height: 32px;
          margin: 20px;
        }
      `}</style>
    </>
  );
});

export default Sidebar;
