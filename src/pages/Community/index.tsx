/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:51:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 00:36:51
 */

import { SearchBar, List, Avatar, Ellipsis } from "antd-mobile";
import React from "react";
import { useNavigate } from "react-router-dom";

interface User {
	name: string,
	avatar: string,
	description: string
};

const Community: React.FunctionComponent = () => {
	const users: User[] = [
		{
			avatar:
				'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
			name: 'Novalee Spicer',
			description: 'Deserunt dolor ea eaque eos',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
			name: 'Sara Koivisto',
			description: 'Animi eius expedita, explicabo',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
			name: 'Marco Gregg',
			description: 'Ab animi cumque eveniet ex harum nam odio omnis',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
			name: 'Edith Koenig',
			description: 'Commodi earum exercitationem id numquam vitae',
		},
	]
	const navigate = useNavigate();
	const enterMessage = () => {
		navigate('/common/communication');
	}
	return (
		<React.Fragment>
			<SearchBar placeholder='请输入内容' style={{'--height' : '50px'}} showCancelButton />
			<List header={null}>
					{users.map((user: User) => (
						<List.Item
							key={user.name}
							prefix={
								<Avatar src={user.avatar}></Avatar>
							}
							description={<Ellipsis direction='end' content={user.description}/>}
							onClick={enterMessage}
						>
							{user.name}
						</List.Item>
					))}
				</List>
		</React.Fragment>
	);
}
export default Community;