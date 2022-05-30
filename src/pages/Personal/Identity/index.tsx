/*
 * @Author: yinwai
 * @Date:   2022-04-20 02:56:56
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 13:16:37
 */

import React from "react";
import { List, CheckList, Card, Ellipsis } from 'antd-mobile';
import { Loading, ErrorBlock } from 'components';
import useAxios from "axios-hooks";
import Styles from './index.module.scss';
import { User } from "model/user";
import Avatar from "react-avatar";
export interface Identity {
	name: string,
	avatar: string,
	description: string,
	path: string
};

const IdentityManager: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/user/userInfo');
	if (loading) return <Loading/>;
	if (error) return <ErrorBlock/>;
	const user: User = data.data[0];
	// console.log(data.data, identities);
	return (
		<React.Fragment>
			<Card style={{ 'margin': '10px' }}>
				<CheckList className={Styles.checklist} defaultValue={[user.nick_name]}>
					{/* {identities.map((user: User) => ( */}
						<CheckList.Item
							key={user.name}
							value={user.nick_name}
							prefix={
								<Avatar name={user.name} size="40"></Avatar>
							}
							description={<Ellipsis direction='end' content={user.desc} />}
						>
							{user.name}
						</CheckList.Item>
					{/* ))} */}
				</CheckList>
			</Card>
			<List header="身份管理">
				<List.Item onClick={() => { }}>添加新身份</List.Item>
				<List.Item onClick={() => { }}>删除当前身份</List.Item>
			</List>
		</React.Fragment>
	)
}
export default IdentityManager;