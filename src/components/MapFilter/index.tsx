/*
 * @Author: yinwai
 * @Date:   2022-04-18 08:37:26
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 16:52:02
 */

import React, { useState } from "react";
import { JumboTabs } from "antd-mobile";
import { MapItem } from "../MapView/index"

export type Filter = (item: MapItem) => boolean;
interface MapFilterProps {
	updateFilter: (filter: (prevFilter: Filter) => Filter) => void;
	// Dispatch<SetStateAction<Filter>>
};
interface Tab {
	key: string,
	title: string,
	description: string
};

const MapFilter: React.FunctionComponent<MapFilterProps> = ({ updateFilter }: MapFilterProps) => {
	const [typeKey, setTypeKey] = useState('supplies');
	const updateKey = (key: string) => {
		setTypeKey(key);
		const newFilter: Filter = (item: MapItem) => (item.type === key);
		updateFilter((prevFilter: Filter) => newFilter);
	};
	const tabs: Tab[] = [
		{
			key: 'supplies',
			title: '物资',
			description: '物资存放点'
		},
		{
			key: 'shelter',
			title: '避难所',
			description: '应急避难点'
		},
		{
			key: 'healthcare',
			title: '医疗点',
			description: '医疗团队驻地'
		},
		{
			key: 'transport',
			title: '交通运输',
			description: '交通枢纽'
		}
	]
	return (
		<JumboTabs activeKey={typeKey} onChange={updateKey}>
			{tabs.map(item => {
				return <JumboTabs.Tab key={item.key} title={item.title} description={item.description}></JumboTabs.Tab>
			})}
		</JumboTabs>
	);
};
export default MapFilter;