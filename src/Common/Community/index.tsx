/*
 * @Author: yinwai
 * @Date:   2022-04-19 01:56:27
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-21 21:51:15
 */

import React from "react";
import { List, Avatar, Image } from "antd-mobile";
import { posts } from "./data";
import Styles from './index.module.scss';

export interface Post {
	avatar: string,
	name: string,
	time: string,
	content: string,
	pics: string[]
};

const Community: React.FunctionComponent = () => {
	return (
		<List className={Styles.root}>{
			posts.map((item: Post, index: number) => (
				<List.Item key={index} className="item" prefix={<Avatar src={item.avatar} className="avatar" />} title={(<div className="name">{item.name}</div>)} description={(<div className="time">{item.time}</div>)}>
					<div className="content">
						{item.content}
					</div>
					{(item.pics.length === 0) ? null : (
						<div className="pictures">
						{
							item.pics.map((item: string, index: number) => (
								<Image src={item} className="picture" key={index}/>
							))
						}
						</div>
					)}
				</List.Item>
			))
		}</List>
	);
};
export default Community;