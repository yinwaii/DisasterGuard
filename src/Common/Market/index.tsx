/*
 * @Author: yinwai
 * @Date:   2022-04-20 15:17:13
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 19:13:53
 */

import React, { useState, useEffect } from "react";
import { List, SideBar, Image } from "antd-mobile";
import Styles from './index.module.scss';
import useAxios from "axios-hooks";

export interface Shop {
	name: string,
	address: string,
	tab: string[]
};

export interface Goods {
	preview: string,
	name: string,
	description: string,
	price: number
};

interface GoodsProps {
	tab: string
};

const GoodsView: React.FunctionComponent<GoodsProps> = ({ tab }) => {
	const [{ data, loading, error }, refetch] = useAxios('/market/getGoods');
	useEffect(() => {
		const updateData = async () => { await refetch(); };
		updateData();
	}, [tab, refetch]);
	if (loading) return <div>加载中</div>;
	if (error) return <div>失败</div>;
	return (
		<List className="goods">{
			data.goods.map((item: Goods, index: number) => (
				<List.Item
					key={index}
					prefix={(<Image src={item.preview} className="preview" />)}
					title={(<div className="title">{item.name}</div>)}
					description={(<div className="price">{'￥' + item.price}</div>)} >
					<div className="description">
						{item.description}
					</div>
				</List.Item>
			))
		}</List>
	);
}

const Market: React.FunctionComponent = () => {
	const [{ data, loading, error }] = useAxios('/market/getInfo');
	const [tabKey, setTabkey] = useState('');
	if (loading) return <div>加载中</div>;
	if (error) return <div>失败</div>;
	const chooseBar = (key: string) => {
		setTabkey(key);
	}
	return (
		<div className={Styles.root}>
			<div className="head">
				<div className="title">
					{data.name}
				</div>
				<div className="text">
					{data.address}
				</div>
			</div>
			<div className="body">
				<SideBar className="sidebar" onChange={chooseBar}>{
					data.tabs.map((item: string, index: number) => (
						<SideBar.Item key={index} title={item} />
					))
				}</SideBar>
				<div className="list">
					<GoodsView tab={tabKey} />
				</div>
			</div>
		</div>
	);
}
export default Market;