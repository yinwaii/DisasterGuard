/*
 * @Author: yinwai
 * @Date:   2022-04-19 02:13:44
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 14:05:03
 */

import { List, Dialog, Toast, Input, ImageUploader, AutoCenter } from "antd-mobile";
import useAxios from "axios-hooks";
import { ErrorBlock, Loading } from "components";
import { User } from "model/user";
import React, { useState } from "react";
import Avatar from "react-avatar";
import { tabs } from "./data";
import Styles from './index.module.scss'

export interface Tab {
	title: string,
	type: string,
	description: React.ReactNode
};

const Profile: React.FunctionComponent = () => {
	const [{ data, loading, error }, refetch] = useAxios('/user/userInfo');
	const [visible_nick, setVisible_nick] = useState<boolean>(false);
	const [visible_desc, setVisible_desc] = useState<boolean>(false);
	const [nickName, setNickName] = useState<string>('');
	const [desc, setDesc] = useState<string>('');
	const getData = () => (nickName === '' ? ('desc=' + desc) : (desc === '' ? 'nick_name=' + nickName : 'desc='+desc+'&nick_name='+nickName));
	const [{ }, executePost] = useAxios({
		url: '/user/updateUserInfo',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: getData(),
		method: 'POST'
	},
		{ manual: true });
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	const user: User = data.data[0];
	// setNickName(user.nick_name);
	// setDesc(user.desc);
	return (
		<React.Fragment>
			<List>
				<Dialog
					visible={visible_nick}
					title={"请输入新的昵称"}
					content={(<AutoCenter>
						<Input placeholder={'请输入昵称'} className={Styles.input} onChange={(val: string) => setNickName(val)} />
					</AutoCenter>)}
					closeOnMaskClick closeOnAction
					onClose={() => setVisible_nick(false)}
					actions={[
						{
							key: 'submit',
							text: '提交',
							onClick: async () => { await executePost(); setNickName(''); refetch() }
						},
					]}
				/>
				<Dialog
					visible={visible_desc}
					title={"请输入新的个性签名"}
					content={(<AutoCenter>
						<Input placeholder={'请输入个性签名'} className={Styles.input} onChange={(val: string) => setDesc(val)} />
					</AutoCenter>)}
					closeOnMaskClick closeOnAction
					onClose={() => setVisible_desc(false)}
					actions={[
						{
							key: 'submit',
							text: '提交',
							onClick: async () => { await executePost(); setDesc(''); refetch() }
						},
					]}
				/>
				<List.Item extra={<Avatar name={user.nick_name} size="60"></Avatar>}>头像</List.Item>
				<List.Item extra={user.uid}>ID</List.Item>
				<List.Item extra={user.nick_name} onClick={()=>setVisible_nick(true)}>昵称</List.Item>
				<List.Item extra={user.name}>用户</List.Item>
				<List.Item extra={user.desc} onClick={()=>setVisible_desc(true)}>个性签名</List.Item>
			</List>
		</React.Fragment>
	);
}
export default Profile;