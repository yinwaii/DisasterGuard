/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 01:32:50
 */

import React, { useState } from "react";
import { JumboTabs } from "antd-mobile";
import { MapView, MapManager, Action, useMapAdder } from "components";
import { tabs } from "./data";
import Styles from './index.module.scss';
import Details from './Details';
import { useActions } from "components/ActionCenter";

export interface Tab {
	key: string,
	title: string,
	type: string,
	description: string
};

const Discovery: React.FunctionComponent = () => {
	const callback_map = async () => {
		await setModify(false);
		await setDetails(false);
	}
	const callback_view = async (id: number) => {
		const key = typeKey;
		await setModify(false);
		await setTypeKey('refresh');
		await setTypeKey(key);
		await setDetails(true);
		await setCurId(id);
	};
	const updateKey = async (key: string) => {
		await setTypeKey('refresh');
		await setTypeKey(key);
		await setDetails(false);
	};
	const onModify = async () => {
		await setModify(!modify);
		const key = typeKey;
		await setTypeKey('refresh');
		await setTypeKey(key);
	};
	const onAdd = () => {
		if (mouseTool)
			mouseTool.polygon();
	}
	const actions: Action[] = [
		{
			text: "增加新图形",
			key: "sdad",
			onClick: onAdd
		},
		{
			text: "萨迪克几哈",
			key: "sdd"
		}
	];
	useActions(actions);
	const [typeKey, setTypeKey] = useState('supplies');
	const [curId, setCurId] = useState(0);
	const [details, setDetails] = useState(false);
	const [modify, setModify] = useState(false);
	const [MouseTool, mouseTool] = useMapAdder();
	return (
		<div className={Styles.root}>
			<div className="head">
				<JumboTabs activeKey={typeKey} onChange={updateKey}>
					{tabs.map(item => {
						return <JumboTabs.Tab key={item.key} title={item.title} description={item.description}></JumboTabs.Tab>
					})}
				</JumboTabs>
			</div>
			<div className="body">
				<MapManager callback={callback_map}>
					<MapView query={{ type: typeKey }} callback={callback_view} curId={curId} modify={modify} />
					{MouseTool}
				</MapManager>
			</div>
			<div className="details">
				<Details id={curId} visible={details} modify={modify} onModify={onModify} />
			</div>
		</div>
	);
}
export default Discovery;