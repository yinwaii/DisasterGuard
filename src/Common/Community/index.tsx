/*
 * @Author: yinwai
 * @Date:   2022-04-19 01:56:27
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 18:14:52
 */

import React from "react";
import { List, Avatar, Image } from "antd-mobile";
import useAxios from "axios-hooks";
// import { posts } from "./data";
import { User } from "../../App/user";
import Styles from './index.module.scss';

export interface Post {
	user: User;
	time: string,
	content: string,
	pics: string[]
};

const Community: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/community/getPosts');
	if (loading) return <div>加载中</div>;
	if (error) return <div>失败</div>;
	return (
		<List className={Styles.root}>{
			data.posts.map((item: Post, index: number) => (
				<List.Item key={index} className="item" prefix={<Avatar src={item.user.avatar} className="avatar" />} title={(<div className="name">{item.user.name}</div>)} description={(<div className="time">{item.time}</div>)}>
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