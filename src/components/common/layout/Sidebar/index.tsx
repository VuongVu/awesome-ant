import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Avatar } from 'antd';

import { RootState } from 'reducers/index';
import { CREATE_NOTE_URL, NOTES_URL } from 'constants/routes';

import { makeSidebarSelector } from './selector';
import { sidebarSelected, sidebarCollapsed } from './slice';

const { Sider } = Layout;

type SidebarProps = {
    sidebar?: ReturnType<typeof makeSidebarSelector>;
    onSidebarSelected: typeof sidebarSelected;
    onSidebarCollapsed: typeof sidebarCollapsed;
};

const Sidebar = memo<SidebarProps>(({ sidebar, onSidebarSelected, onSidebarCollapsed }) => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItems = useMemo(
        () => [
            {
                key: '1',
                icon: 'inbox',
                title: 'Notes',
                url: NOTES_URL,
            },
            {
                key: '2',
                icon: 'star',
                title: 'Important',
                url: '#',
            },
            {
                key: '3',
                icon: 'tag',
                title: 'Tags',
                url: '#',
            },
            {
                key: '4',
                icon: 'plus-circle',
                title: 'Create note',
                url: CREATE_NOTE_URL,
            },
            {
                key: '5',
                icon: 'search',
                title: 'Search',
                url: '#',
            },
            {
                key: '6',
                icon: 'wechat',
                title: 'Work chat',
                url: '#',
            },
        ],
        [],
    );

    useEffect(() => {
        sidebar?.collapsed && setCollapsed(sidebar.collapsed);
    }, [sidebar]);

    const handleCollapse = useCallback((state: boolean) => {
        onSidebarCollapsed({ collapsed: state });
        setCollapsed(state);
    }, []);

    const handleMenuSelected = useCallback((key: string, url: string) => {
        sidebar?.selectedKey !== key && onSidebarSelected({ selectedKey: key });
        Router.push(url);
    }, []);

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse} width={150}>
                <div className="avatarContainer">
                    <Avatar
                        style={{ backgroundColor: '#00A2AE', verticalAlign: 'middle' }}
                        size="large">
                        Vũ
                    </Avatar>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[sidebar?.selectedKey.toString() || '']}>
                    {sidebarItems.map((item) => (
                        <Menu.Item
                            key={item.key}
                            onClick={() => handleMenuSelected(item.key, item.url)}>
                            <Icon type={item.icon} style={{ fontSize: '16px' }} />
                            <span>{item.title}</span>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>

            <style jsx>{`
                .avatarContainer {
                    height: 32px;
                    margin: 20px;
                }
            `}</style>
        </>
    );
});

const mapStateToProps = (state: RootState) => ({ sidebar: makeSidebarSelector(state) });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        { onSidebarSelected: sidebarSelected, onSidebarCollapsed: sidebarCollapsed },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
