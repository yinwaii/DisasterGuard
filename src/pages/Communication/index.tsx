/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:51:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 15:41:46
 */

import { SearchBar, List, Avatar, Ellipsis } from "antd-mobile";
import React from "react";
import useAxios from "axios-hooks";
import { useNavigate } from "react-router-dom";
import { Contact } from "model/user";
// import { users } from "./data";

const Communication: React.FunctionComponent = () => {
	
	const navigate = useNavigate();
	const [{ data, loading, error }] = useAxios('/communication/getContacts');
	if (loading) return <div>加载中</div>;
	if (error) return <div>失败</div>;
	const contactList: Contact[] = data.contacts;
	console.log(contactList);
	const enterMessage = (path: string) => (() => {
		navigate('/' + path);
	});
	return (
		<React.Fragment>
			<SearchBar placeholder='请输入内容' style={{'--height' : '50px'}} showCancelButton />
			<List header={null}>
					{contactList.map((contact: Contact, index: number) => (
						<List.Item
							key={index}
							prefix={
								<Avatar src={contact.user.avatar}></Avatar>
							}
							description={<Ellipsis direction='end' content={contact.lastMessage}/>}
							onClick={enterMessage(contact.type)}
						>
							{contact.user.name}
						</List.Item>
					))}
				</List>
		</React.Fragment>
	);
}
export default Communication;