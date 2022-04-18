/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:52:09
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 22:03:35
 */

import { Avatar, List } from "antd-mobile";
import { SystemQRcodeOutline, SetOutline } from "antd-mobile-icons";
import React from "react";
import "../pages.scss"

interface Profile {
	id: number,
	avatar: string,
	agent: string,
	identity: string
};

interface Tab {
	icon: React.ReactNode,
	name: string,
	path: string
};

const Personal: React.FunctionComponent = () => {
	const profile: Profile = {
		id: 1000,
		avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
		agent: "yinwai",
		identity: "self"
	};
	const tabs: Tab[] = [
		{
			icon: (<SystemQRcodeOutline />),
			name: "身份码",
			path: "/"
		},
		{
			icon: (<SetOutline />),
			name: "设置",
			path: "/"
		}
	];
	return (
		<div className="page">
			<div className="page list">
				<List>
					<List.Item prefix={<Avatar src={profile.avatar} />} title={<h2>{profile.agent}</h2>} description={profile.identity} extra={<SystemQRcodeOutline />}></List.Item>
				</List>
				<List header="通用设置">
					{tabs.map((item: Tab) => (<List.Item prefix={item.icon}>{item.name}</List.Item>))}
				</List>
			</div>
		</div>
	);
}
export default Personal;