/*
 * @Author: yinwai
 * @Date:   2022-04-19 01:56:27
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 11:20:20
 */

import React from "react";
import { List, Avatar, Image } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import useAxios from "axios-hooks";
import { Post } from "model/message";
import { Loading, ErrorBlock } from 'components';
import Styles from './index.module.scss';

const Community: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/community/getPosts');
	const navigate = useNavigate();
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	const onClick = () => { navigate('postmap') };
	return (
		<List className={Styles.root}>{
			data.posts.map((item: Post, index: number) => (
				<List.Item key={index}
					className="item"
					prefix={<Avatar src={item.user.avatar} className="avatar" />}
					title={(<div className="name">{item.user.name}</div>)}
					description={(<div className="time">{item.time}</div>)}
					onClick={onClick}
					arrow={false}
				>
					<div className="content">
						{item.content}
					</div>
					{(item.pics.length === 0) ? null : (
						<div className="pictures">
							{
								item.pics.map((item: string, index: number) => (
									<Image src={item} className="picture" key={index} />
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