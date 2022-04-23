/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:51:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 22:16:58
 */

import { SearchBar, List, Avatar, Ellipsis } from "antd-mobile";
import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "./data";

export interface User {
	name: string,
	avatar: string,
	description: string,
	path: string
};

const Communication: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const enterMessage = (path: string) => (() => {
		navigate(path);
	});
	return (
		<React.Fragment>
			<SearchBar placeholder='请输入内容' style={{'--height' : '50px'}} showCancelButton />
			<List header={null}>
					{users.map((user: User, index: number) => (
						<List.Item
							key={index}
							prefix={
								<Avatar src={user.avatar}></Avatar>
							}
							description={<Ellipsis direction='end' content={user.description}/>}
							onClick={enterMessage(user.path)}
						>
							{user.name}
						</List.Item>
					))}
				</List>
		</React.Fragment>
	);
}
export default Communication;