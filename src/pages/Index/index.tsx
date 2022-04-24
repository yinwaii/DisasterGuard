/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:51:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 19:02:08
 */

import { SearchBar, List, Avatar, Ellipsis } from "antd-mobile";
import { AppOutline, TeamOutline, ShopbagOutline, MailOpenOutline } from 'antd-mobile-icons';
import React from "react";
import useAxios from "axios-hooks";
import { useNavigate } from "react-router-dom";
import { Loading, ErrorBlock } from "components";
import { Contact, User } from "model/user";
import { toUrl } from "utils/request";
import Styles from './index.module.scss';

const Communication: React.FunctionComponent = () => {

	const navigate = useNavigate();
	const [{ data, loading, error }] = useAxios('/communication/getContacts');
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	const contactList: Contact[] = data.contacts;
	console.log(contactList);
	const enterMessage = (path: string, user: User) => (() => {
		navigate(toUrl('/' + path, { title: user.name }));
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
				{contactList.map((contact: Contact, index: number) => (
					<List.Item
						key={index}
						prefix={
							<Avatar src={contact.user.avatar}></Avatar>
						}
						description={<Ellipsis direction='end' content={contact.lastMessage} />}
						onClick={enterMessage(contact.type, contact.user)}
					>
						<div className={Styles.title}>
							<div className="name">
								{contact.user.name}
							</div>
							<div className="icon">
								{getTypeIcon(contact.type)}
							</div>
						</div>
					</List.Item>
				))}
			</List>
		</React.Fragment>
	);
}
export default Communication;