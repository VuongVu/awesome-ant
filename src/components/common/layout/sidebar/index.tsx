/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { Layout, Menu, Icon, Avatar } from 'antd';
import { ClickParam } from 'antd/lib/menu';

import { sidebarMenuItems } from './constant';
import { makeSidebarSelector } from './selector';
import { sidebarCollapsed } from './slice';

const { Sider } = Layout;

const Sidebar = memo(() => {
    const dispatch = useDispatch();
    const sidebarState = useSelector(makeSidebarSelector);
    const { pathname } = useRouter();
    const [menuSelectedKey, setMenuSelectedKey] = useState('');

    const menuItems = useMemo(() => sidebarMenuItems, []);

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
    }, []);

    const handleMenuSelected = useCallback(
        (param: ClickParam, url: string) => {
            menuSelectedKey !== param.key && Router.push(url);
        },
        [pathname, menuSelectedKey],
    );

    return (
        <>
            <Sider
                collapsible
                collapsed={sidebarState.collapsed}
                onCollapse={handleCollapse}
                width={150}
                style={{
                    height: '100vh',
                }}>
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
