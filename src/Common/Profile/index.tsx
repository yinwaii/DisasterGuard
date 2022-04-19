/*
 * @Author: yinwai
 * @Date:   2022-04-19 02:13:44
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 02:33:39
 */

import { Avatar, List } from "antd-mobile";
import { SystemQRcodeOutline } from 'antd-mobile-icons';
import React from "react";

interface Tab {
	title: string,
	description: React.ReactNode
};

const Profile: React.FunctionComponent = () => {
	const tabs: Tab[] = [
		{
			title: "头像",
			description: <Avatar src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
		},
		{
			title: "名字",
			description: "张三"
		},
		{
			title: "ID",
			description: "sadsafasfsfs"
		},
		{
			title: "身份码",
			description: <SystemQRcodeOutline />
		}
	];
	return (
		<React.Fragment>
			<List>{
				tabs.map((item: Tab, index: number) => (
					<List.Item extra={item.description} key={index}>{item.title}</List.Item>
				))
			}</List>
		</React.Fragment>
	);
}
export default Profile;