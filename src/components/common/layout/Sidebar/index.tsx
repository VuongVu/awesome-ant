/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
import Router, { useRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Layout, Menu, Icon, Avatar } from 'antd';
import { ClickParam } from 'antd/lib/menu';

import { CREATE_NOTE_URL, NOTES_URL } from 'constants/routes';

import { makeSidebarSelector } from './selector';
import { sidebarCollapsed } from './slice';

const { Sider } = Layout;

type SidebarProps = {
    sidebar: ReturnType<typeof makeSidebarSelector>;
    onSidebarCollapsed: typeof sidebarCollapsed;
};

const Sidebar = memo<SidebarProps>(({ sidebar, onSidebarCollapsed }) => {
    const { pathname } = useRouter();
    const [collapsed, setCollapsed] = useState(sidebar?.collapsed);
    const [menuSelectedKey, setMenuSelectedKey] = useState('');
    const sidebarMenuItems = useMemo(
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
        const setActiveMenu = () => {
            const menuItemKey = getMenuItemKey();
            setMenuSelectedKey(menuItemKey);
        };

        setActiveMenu();
    }, [pathname]);

    const getMenuItemKey = useCallback(() => {
        const itemIndex = sidebarMenuItems.findIndex((item) => item.url === pathname);
        return itemIndex !== -1 ? sidebarMenuItems[itemIndex].key : '';
    }, [pathname]);

    const handleCollapse = useCallback((state: boolean) => {
        onSidebarCollapsed({ collapsed: state });
        setCollapsed(state);
    }, []);

    const handleMenuSelected = useCallback(
        (param: ClickParam, url: string) => {
            menuSelectedKey !== param.key && Router.push(url);
        },
        [pathname, menuSelectedKey],
    );

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
                <Menu theme="dark" mode="inline" selectedKeys={[menuSelectedKey]}>
                    {sidebarMenuItems.map((item) => (
                        <Menu.Item
                            key={item.key}
                            onClick={(param) => handleMenuSelected(param, item.url)}>
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

const mapStateToProps = (state: any) => ({ sidebar: makeSidebarSelector(state) });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ onSidebarCollapsed: sidebarCollapsed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
