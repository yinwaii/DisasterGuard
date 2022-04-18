/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:29:44
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 22:03:02
 */

import React from "react";
import { TabBar } from "antd-mobile";
import { LocationOutline, MessageOutline, UserOutline } from "antd-mobile-icons"
import { useLocation, useNavigate } from "react-router-dom";
interface Tab {
	key: string,
	title: string,
	icon: React.ReactNode
};
const Bottom: React.FunctionComponent = () => {
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
			key: '/community',
			title: '社区',
			icon: <MessageOutline />
		},
		{
			key: '/personal',
			title: '个人',
			icon: <UserOutline />
		},
	]
	return (
		<TabBar activeKey={pathname} onChange={(key: string) => activateTab(key)}>
			{tabs.map(item => {
				return <TabBar.Item key={item.key} icon={item.icon} title={item.title} />;
			})}
		</TabBar>
	);
}
export default Bottom;