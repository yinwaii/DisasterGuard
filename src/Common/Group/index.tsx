/*
 * @Author: yinwai
 * @Date:   2022-04-18 22:06:18
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 18:16:16
 */

import React from "react";
import { Avatar, Card, Input, Button } from "antd-mobile"
// import { messages } from "./data";
import { User } from "../../App/user";
import useAxios from "axios-hooks";
import Styles from './index.module.scss';

export interface Message {
	user: User,
	content: string,
	time: string
};

const Group: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/group/getMessages');
	if (loading) return <div>加载中</div>;
	if (error) return <div>失败</div>;
	return (
		<div className={Styles.root}>
			<div className="body">{
				data.messages.map((item: Message, index: number) => (
					<div className={Styles.message} key={index}>
						<div className="left">
							<Avatar src={item.user.avatar}/>
						</div>
						<div className="right">
							<Card className="message right card">{item.content}</Card>
						</div>
					</div>
				))
			}</div>
			<div className="bottom">
				<div className={Styles.form}>
					<div className="left">
						<Input placeholder='请输入信息' clearable />
					</div>
					<div className="right">
						<Button>发送</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Group;