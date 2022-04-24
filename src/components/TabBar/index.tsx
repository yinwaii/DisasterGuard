/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:29:44
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 16:03:17
 */

import React from "react";
import { TabBar } from "antd-mobile";
import { LocationOutline, MessageOutline, UserOutline } from "antd-mobile-icons"
import { useLocation, useNavigate } from "react-router-dom";
import Styles from './index.module.scss';

interface Tab {
	key: string,
	title: string,
	icon: React.ReactNode
};
const PackedTabBar: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const activateTab = (key: string) => {
		navigate(key);
	};
	const tabs: Tab[] = [
		{
			key: '/discovery',
			title: '发现',
			icon: <LocationOutline />
		},
		{
			key: '/',
			title: '信息',
			icon: <MessageOutline />
		},
		{
			key: '/personal',
			title: '个人',
			icon: <UserOutline />
		},
	]
	return (
		<React.Fragment>
			<TabBar activeKey={pathname} onChange={(key: string) => activateTab(key)} className={Styles.root}>
				{tabs.map(item => {
					return <TabBar.Item key={item.key} icon={item.icon} title={item.title} />;
				})}
			</TabBar>
		</React.Fragment>
	);
}
export default PackedTabBar;