/*
 * @Author: yinwai
 * @Date:   2022-04-19 02:13:44
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 14:52:11
 */

import { List } from "antd-mobile";
import React from "react";
import { tabs } from "./data";

export interface Tab {
	title: string,
	description: React.ReactNode
};

const Profile: React.FunctionComponent = () => {
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