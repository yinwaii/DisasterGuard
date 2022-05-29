/*
 * @Author: yinwai
 * @Date:   2022-04-24 20:05:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 22:47:25
 */

import { Popup,  Avatar, Image } from "antd-mobile";
import useAxios from "axios-hooks";
import React from "react";
import { MapManager, MapView, Loading, ErrorBlock } from "components";
import { Post } from "model/group";
import Styles from './index.module.scss';

const Postmap: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/community/getPosts');
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	const item: Post = data.posts[0];
	return (
		<div className={Styles.root}>
			<div className="map">
				<MapManager>
					<MapView query={{}} />
				</MapManager>
			</div>
			<Popup visible={true} mask={false} className={Styles.root}>
				<div className='panel'>
					<div className="avatar">
						<Avatar src={item.user.avatar} className="avatar" />
					</div>
					<div className="body">
						<div className="name">{item.user.name}</div>
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
						<div className="time">{item.time}</div>
					</div>
				</div>
			</Popup>
		</div>
	);
}
export default Postmap;