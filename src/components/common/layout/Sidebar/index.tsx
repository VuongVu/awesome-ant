/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { injectReducer } from 'redux-injectors';

import { Layout, Menu, Icon, Avatar } from 'antd';
import { ClickParam } from 'antd/lib/menu';

import { useReduxSelector } from 'utils/hooks';

import { sidebarMenuItems, KEY_REDUCER } from './constant';
import { makeSidebarSelector } from './selector';
import { sidebarCollapsed, reducer } from './slice';

const { Sider } = Layout;

const Sidebar = memo(() => {
    injectReducer({ key: KEY_REDUCER, reducer });

    const dispatch = useDispatch();
    const sidebarState = useReduxSelector(makeSidebarSelector);
    const { pathname } = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const [menuSelectedKey, setMenuSelectedKey] = useState('');

    const menuItems = useMemo(() => sidebarMenuItems, []);

    useEffect(() => {
        setCollapsed(sidebarState?.collapsed);
    }, [sidebarState]);

    useEffect(() => {
        const setActiveMenu = () => {
            const menuItemKey = getMenuItemKey();
            setMenuSelectedKey(menuItemKey);
        };

        setActiveMenu();
    }, [pathname]);

    const getMenuItemKey = useCallback(() => {
        const itemIndex = menuItems.findIndex((item) => item.url === pathname);
        return itemIndex !== -1 ? menuItems[itemIndex].key : '';
    }, [pathname]);

    const handleCollapse = useCallback((state: boolean) => {
        dispatch(sidebarCollapsed({ collapsed: state }));
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
                    {menuItems.map((item) => (
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

export default Sidebar;
