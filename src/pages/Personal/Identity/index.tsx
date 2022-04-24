/*
 * @Author: yinwai
 * @Date:   2022-04-20 02:56:56
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 19:07:21
 */

import React from "react";
import { List, CheckList, Avatar, Card, Ellipsis } from 'antd-mobile';
import { Loading, ErrorBlock } from 'components';
import useAxios from "axios-hooks";
import Styles from './index.module.scss'
export interface Identity {
	name: string,
	avatar: string,
	description: string,
	path: string
};

const IdentityManager: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/user/getIdentity');
	if (loading) return <Loading/>;
	if (error) return <ErrorBlock/>;
	const { identities }: { identities: Identity[] } = data;
	return (
		<React.Fragment>
			<Card style={{ 'margin': '10px' }}>
				<CheckList className={Styles.checklist}>
					{identities.map((user: Identity) => (
						<CheckList.Item
							key={user.name}
							value={user.name}
							prefix={
								<Avatar src={user.avatar}></Avatar>
							}
							description={<Ellipsis direction='end' content={user.description} />}
						>
							{user.name}
						</CheckList.Item>
					))}
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