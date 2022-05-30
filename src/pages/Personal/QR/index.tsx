/*
 * @Author: yinwai
 * @Date:   2022-04-19 12:54:36
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 13:01:49
 */

import { Avatar } from "antd-mobile";
import React from "react";
import QRStyle from "./index.module.scss";
import useAxios from "axios-hooks";
import { QRCodeSVG } from 'qrcode.react';
import { Loading, ErrorBlock } from 'components';
import { User } from "model/user";


const QR: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/user/userInfo');
	if (loading) return <Loading/>;
	if (error) return <ErrorBlock/>;
	const user: User = data.data[0];
	return (
		<div className={QRStyle.root}>
			<div className="head">
				<div className="left">
					{/* <Avatar src={user.avatar} /> */}
				</div>
				<div className="right">
					<div className="title">{user.name}</div>
					<div className="text">adsa</div>
				</div>
			</div>
			<div className="body">
				<QRCodeSVG value={user.uid+user.name+user.nick_name+user.desc} level='H' size={256} />
			</div>
		</div>
	);
}
export default QR;