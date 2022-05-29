/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:52:09
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 04:29:27
 */

import { List } from "antd-mobile";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import React from "react";
import useAxios from "axios-hooks";
import { profile, tabs } from "./data";
import { Loading, ErrorBlock } from "components";

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
	const [{ data, loading, error }] = useAxios('/user/userInfo');
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	console.log(data);
	const enterMessage = (path: string) => (() => {
		navigate(path);
	});
	return (
		<React.Fragment>
			<List>
				<List.Item prefix={<Avatar name={data.data[0].name} size="80" />} title={<h2>{data.data[0].name + "(" + data.data[0].nick_name + ")"}</h2>} description={data.data[0].desc} onClick={enterMessage('profile')}></List.Item>
			</List>
			<List header="通用设置">
				{tabs.map((item: Tab, index: number) => (<List.Item prefix={item.icon} key={index} onClick={enterMessage(item.path)}>{item.name}</List.Item>))}
			</List>
		</React.Fragment>
	);
}
export default Personal;