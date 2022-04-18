/*
 * @Author: yinwai
 * @Date:   2022-04-18 22:06:18
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 01:59:30
 */

import React from "react";
import { Avatar, Card, Input, Button } from "antd-mobile"

interface Tab {
	avatar: string,
	message: string
};

const tabs: Tab[] = [
	{
		avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
		message: '第一条message是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰'
	},
	{
		avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
		message: '第二条message是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰'
	},
	{
		avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
		message: '第一条message是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰'
	},
	{
		avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
		message: '第二条message是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰'
	}, {
		avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
		message: '第一条message是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰'
	},
	{
		avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
		message: '第二条message是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰'
	},
];

const Group: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="app body">{
				tabs.map((item: Tab, index: number) => (
					<div className="message" key={index}>
						<div className="message left">
							<Avatar src={item.avatar}/>
						</div>
						<div className="message right">
							<Card className="message right card">{item.message}</Card>
						</div>
					</div>
				))
			}</div>
			<div className="app bottom">
				<div className="form">
					<div className="form left">
						<Input placeholder='请输入信息' clearable />
					</div>
					<div className="form right">
						<Button>发送</Button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Group;