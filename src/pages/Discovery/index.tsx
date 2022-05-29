/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 17:57:00
 */

import React, { useState } from "react";
import { JumboTabs } from "antd-mobile";
import { MapView, MapManager, Action, useMapAdder } from "components";
import { tabs, typeMap } from "./data";
import Styles from './index.module.scss';
import Details from './Details';
import { useActions } from "components/ActionCenter";
import { MapItem } from "model/map";
import useAxios from "axios-hooks";
import { useEffect } from "react";

export interface Tab {
	key: string,
	title: string,
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
		console.log(mouseTool)
		if (mouseTool.current)
		{
			switch (typeMap[typeKey])
			{
				case 'polygon':
					mouseTool.current.polygon();
					break;
				case 'path':
					mouseTool.current.polyline();
					break;
				case 'marker':
					mouseTool.current.marker();
					break;
				case 'circle':
					mouseTool.current.circle();
					break;
			}
		}
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
	const [result, setResult] = useState<{ data: MapItem[], type: string }>();
	const [typeKey, setTypeKey] = useState('supplies');
	const [curId, setCurId] = useState(0);
	const [details, setDetails] = useState(false);
	const [modify, setModify] = useState(false);
	const [MouseTool, mouseTool] = useMapAdder(setResult);
	useActions(actions, [typeKey]);
	const getData = () => {
		const typeDict: { [name: string]: string } = { 'marker': 'Marker', 'polygon': 'Polygon', 'circle': 'Circle', 'path': 'Path' };
		return {
			data: result,
			anonymous: false,
			type: typeKey,
			public: true,
			element_type: result ? typeDict[result.type]: 'marker'
		};
	}
	const [{ data }, executePost] = useAxios(
		{
			url: '/map/createItem',
			headers: { 'content-type': 'application/json' },
			data: getData(),
			method: 'POST'
		},
		{ manual: true }
	);
	useEffect(() => { if (result) executePost() }, [result, typeKey, executePost]);
	if (data)
		console.log(data);
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
					<MapView query={{ type: typeKey, lng_min: '121.3', lng_max: '121.6', lat_min: '30.8', lat_max: '31.5' }} callback={callback_view} curId={curId} modify={modify} />
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