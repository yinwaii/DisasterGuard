/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:51:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 02:07:54
 */

import { SearchBar, List, Ellipsis } from "antd-mobile";
import { AppOutline, TeamOutline, ShopbagOutline, MailOpenOutline } from 'antd-mobile-icons';
import React from "react";
import useAxios from "axios-hooks";
import { useNavigate } from "react-router-dom";
import { Loading, ErrorBlock, Action, useActions, useApplyGroup, useCreateGroup } from "components";
import { Group, User } from "model/user";
import { toUrl } from "utils/request";
import Styles from './index.module.scss';
import { GroupAction } from "model/group";
import Avatar from "react-avatar";

const Communication: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const [{ data, loading, error }] = useAxios('/group/getUserGroupInfo');
	const [ApplyGroup, applyGroup]: GroupAction = useApplyGroup();
	const [CreateGroup, createGroup] = useCreateGroup();
	const actions: Action[] = [
		{
			key: 'apply',
			text: '加入新组织',
			onClick: applyGroup
		},
		{
			key: 'create',
			text: '创建新组织',
			onClick: createGroup
		}
	];
	useActions(actions);
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	console.log(data);
	const contactList: Group[] = data.data;
	const enterMessage = (gid: number) => (() => {
		navigate(toUrl('/organization' , { gid: gid.toString() }));
	});
	const getTypeIcon = (type: 'community' | 'group' | 'market' | 'organization') => {
		switch (type) {
			case 'community':
				return (<AppOutline />);
			case 'group':
				return (<TeamOutline />);
			case 'market':
				return (<ShopbagOutline />);
			case 'organization':
				return (<MailOpenOutline />);
		}
	};
	return (
		<React.Fragment>
			<SearchBar placeholder='请输入内容' className={Styles.searchBar} showCancelButton />
			<List header={null}>
				{contactList.map((contact: Group, index: number) => (
					<List.Item
						key={index}
						prefix={
							<Avatar name={contact.name} size="40"></Avatar>
						}
						description={<Ellipsis direction='end' content={contact.desc} />}
						onClick={enterMessage(contact.gid)}
					>
						<div className={Styles.title}>
							<div className="name">
								{contact.name}
							</div>
							{/* <div className="icon">
								{getTypeIcon(contact.type)}
							</div> */}
						</div>
					</List.Item>
				))}
				{ApplyGroup}
				{CreateGroup}
			</List>
		</React.Fragment>
	);
}
export default Communication;