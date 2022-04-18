/*
 * @Author: yinwai
 * @Date:   2022-04-18 22:06:18
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 01:05:57
 */

import React from "react";
import { Form, Input, Button } from "antd-mobile"

const Communication: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="app body">
			</div>
			<div className="bottom form">
				<div className="left">
					<Input placeholder='请输入验证码' clearable />
				</div>
				<div className="right">
					<Button>发送</Button>
				</div>
			</div>
		</React.Fragment>
		// <div className="pages">
		// 	<div className="pages map">
		// 	</div>
		// 	<div className="bottom">
		// 		<div className="left">
		// 			<Input placeholder='请输入验证码' clearable />
		// 		</div>
		// 		<div className="right">
		// 			<Button>发送</Button>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Communication;