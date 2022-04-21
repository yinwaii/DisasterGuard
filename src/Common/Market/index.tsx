/*
 * @Author: yinwai
 * @Date:   2022-04-20 15:17:13
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-21 21:51:45
 */

import React from "react";
import { List, SideBar, Image } from "antd-mobile";
import Styles from './index.module.scss';
import { shop, tabs, goods } from "./data";

export interface Shop {
	name: string,
	position: string
};

export interface Tab {
	key: string,
	title: string
};

export interface Goods {
	preview: string,
	name: string,
	description: string,
	price: number
};

const Market: React.FunctionComponent = () => {
	return (
		<div className={Styles.root}>
			<div className="head">
				<div className="title">
					{shop.name}
				</div>
				<div className="text">
					{shop.position}
				</div>
			</div>
			<div className="body">
				<SideBar className="sidebar">{
					tabs.map((item: Tab) => (
						<SideBar.Item key={item.key} title={item.title} />
					))
				}</SideBar>
				<div className="list">
					<List className="goods">{
						goods.map((item: Goods, index: number) => (
							<List.Item
								key={index}
								prefix={(<Image src={item.preview} className="preview" />)}
								title={(<div className="title">{item.name}</div>)}
								description={(<div className="price">{'￥'+item.price}</div>)} >
								<div className="description">
									{item.description}
								</div>
							</List.Item>
						))
					}</List>
				</div>
			</div>
		</div>
	);
}
export default Market;