/*
 * @Author: yinwai
 * @Date:   2022-04-19 12:54:36
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-20 18:25:50
 */

import { Avatar } from "antd-mobile";
import React from "react";
import QRStyle from "./index.module.scss";
import { QRCodeSVG } from 'qrcode.react';
import { user } from "./data";

export interface User {
	avatar: string,
	name: string,
	identity: string,
	qr: string
};

const QR: React.FunctionComponent = () => {
	return (
		<div className={QRStyle.root}>
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
				<QRCodeSVG value={user.qr} level='H' size={256} />
			</div>
		</div>
	);
}
export default QR;