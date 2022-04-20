/*
 * @Author: yinwai
 * @Date:   2022-04-18 22:06:18
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-20 16:14:39
 */

import React from "react";
import { Avatar, Card, Input, Button } from "antd-mobile"
import { messages } from "./data";
import Styles from './index.module.scss';

export interface Message {
	avatar: string,
	message: string
};

const Group: React.FunctionComponent = () => {
	return (
		<div className={Styles.root}>
			<div className="body">{
				messages.map((item: Message, index: number) => (
					<div className={Styles.message} key={index}>
						<div className="left">
							<Avatar src={item.avatar}/>
						</div>
						<div className="right">
							<Card className="message right card">{item.message}</Card>
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