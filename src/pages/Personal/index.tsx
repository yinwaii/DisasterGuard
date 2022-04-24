/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:52:09
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 01:29:24
 */

import { Avatar, List } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import React from "react";
import { profile, tabs } from "./data";

export interface Profile {
	id: number,
	avatar: string,
	agent: string,
	identity: string
};

export interface Tab {
	icon: React.ReactNode,
	name: string,
	path: string
};

const Personal: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const enterMessage = (path: string) => (() => {
		navigate(path);
	});
	return (
		<React.Fragment>
			<List>
				<List.Item prefix={<Avatar src={profile.avatar} />} title={<h2>{profile.agent}</h2>} description={profile.identity} onClick={enterMessage('profile')}></List.Item>
			</List>
			<List header="通用设置">
				{tabs.map((item: Tab, index: number) => (<List.Item prefix={item.icon} key={index} onClick={enterMessage(item.path)}>{item.name}</List.Item>))}
			</List>
		</React.Fragment>
	);
}
export default Personal;