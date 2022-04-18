/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:52:09
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 02:33:28
 */

import { Avatar, List } from "antd-mobile";
import { SystemQRcodeOutline, SetOutline, UserCircleOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import React from "react";

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
			icon: (<UserCircleOutline />),
			name: "身份管理",
			path: "/"
		},
		{
			icon: (<SetOutline />),
			name: "设置",
			path: "/"
		}
	];
	const navigate = useNavigate();
	const enterMessage = (path: string) => (() => {
		navigate('/common' + path);
	});
	return (
		<React.Fragment>
			<List>
				<List.Item prefix={<Avatar src={profile.avatar} />} title={<h2>{profile.agent}</h2>} description={profile.identity} onClick={enterMessage('/profile')}></List.Item>
			</List>
			<List header="通用设置">
				{tabs.map((item: Tab, index: number) => (<List.Item prefix={item.icon} key={index}>{item.name}</List.Item>))}
			</List>
		</React.Fragment>
	);
}
export default Personal;