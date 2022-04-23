/*
 * @Author: yinwai
 * @Date:   2022-04-19 12:54:36
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 19:43:36
 */

import { Avatar } from "antd-mobile";
import React from "react";
import QRStyle from "./index.module.scss";
import useAxios from "axios-hooks";
import { QRCodeSVG } from 'qrcode.react';
import { User } from "../../App/user";
// import { user } from "./data";

// export interface User {
// 	avatar: string,
// 	name: string,
// 	identity: string,
// 	qr: string
// };

const QR: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/user/getInfo');
	if (loading) return <div>加载中</div>;
	if (error) return <div>失败</div>;
	const { user, hash }: { user: User, hash: string } = data;
	return (
		<div className={QRStyle.root}>
			<div className="head">
				<div className="left">
					<Avatar src={user.avatar} />
				</div>
				<div className="right">
					<div className="title">{user.name}</div>
					<div className="text">adsa</div>
				</div>
			</div>
			<div className="body">
				<QRCodeSVG value={hash} level='H' size={256} />
			</div>
		</div>
	);
}
export default QR;