/*
 * @Author: yinwai
 * @Date:   2022-04-19 12:54:36
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 14:00:20
 */

import { Avatar, Card, List } from "antd-mobile";
import React from "react";
import QRStyle from "./index.module.scss"

interface User {
	avatar: string,
	name: string,
	identity: string,
	qr: string
};

const QR: React.FunctionComponent = () => {
	const user: User = {
		avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
		name: "张三",
		identity: "锟斤拷",
		qr: "github.com"
	}
	return (
		<React.Fragment>
			<div className={QRStyle.box}>
				<div className="head">
					<div className="left">
						<Avatar src={user.avatar} />
					</div>
					<div className="right">
						<div className="title">{user.name}</div>
						<div className="text">{user.identity}</div>
					</div>
				</div>
				<div className="body">
					sds
				</div>
			</div>
		</React.Fragment>
	);
}
export default QR;