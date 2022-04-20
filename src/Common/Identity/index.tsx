/*
 * @Author: yinwai
 * @Date:   2022-04-20 02:56:56
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-20 14:33:44
 */

import React from "react";
import { List, Avatar, Card, Ellipsis } from 'antd-mobile';
import { identities } from "./data";
export interface Identity {
	name: string,
	avatar: string,
	description: string,
	path: string
};

const IdentityManager: React.FunctionComponent = () => {
	return (
		<Card style={{'margin': '10px'}}>
			<List header={null}>
				{identities.map((user: Identity) => (
					<List.Item
						key={user.name}
						prefix={
							<Avatar src={user.avatar}></Avatar>
						}
						description={<Ellipsis direction='end' content={user.description} />}
					>
						{user.name}
					</List.Item>
				))}
			</List>
		</Card>
	)
}
export default IdentityManager;