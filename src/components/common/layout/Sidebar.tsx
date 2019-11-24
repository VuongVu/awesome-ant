import React, { memo, useState, useCallback, useMemo } from 'react';
import Router from 'next/router';
import { Layout, Menu, Icon, Avatar } from 'antd';

import { CREATE_NOTE_URL, NOTES_URL } from 'constants/routes';

const { Sider } = Layout;

const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const sidebarItems = useMemo(
        () => [
            {
                key: 1,
                icon: 'inbox',
                title: 'Notes',
                url: NOTES_URL,
            },
            {
                key: 2,
                icon: 'star',
                title: 'Important',
                url: '#',
            },
            {
                key: 3,
                icon: 'tag',
                title: 'Tags',
                url: '#',
            },
            {
                key: 4,
                icon: 'plus-circle',
                title: 'Create note',
                url: CREATE_NOTE_URL,
            },
            {
                key: 5,
                icon: 'search',
                title: 'Search',
                url: '#',
            },
            {
                key: 6,
                icon: 'wechat',
                title: 'Work chat',
                url: '#',
            },
        ],
        [],
    );

    const handleCollapse = useCallback((state: boolean) => setCollapsed(state), []);

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse} width={150}>
                <div className="avatar">
                    <Avatar
                        style={{ backgroundColor: '#00A2AE', verticalAlign: 'middle' }}
                        size="large">
                        Vũ
                    </Avatar>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {sidebarItems.map((item) => (
                        <Menu.Item key={item.key} onClick={() => Router.push(item.url)}>
                            <Icon type={item.icon} style={{ fontSize: '16px' }} />
                            <span>{item.title}</span>
                        </Menu.Item>
                    ))}
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
