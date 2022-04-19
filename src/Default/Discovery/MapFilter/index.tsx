/*
 * @Author: yinwai
 * @Date:   2022-04-18 08:37:26
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 14:55:00
 */

import React, { useState } from "react";
import { JumboTabs } from "antd-mobile";
import { MapItem } from "../MapView/index";
import { tabs } from "./data";

export type Filter = (item: MapItem) => boolean;
interface MapFilterProps {
	updateFilter: (filter: (prevFilter: Filter) => Filter) => void;
	// Dispatch<SetStateAction<Filter>>
};
export interface Tab {
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
	return (
		<JumboTabs activeKey={typeKey} onChange={updateKey}>
			{tabs.map(item => {
				return <JumboTabs.Tab key={item.key} title={item.title} description={item.description}></JumboTabs.Tab>
			})}
		</JumboTabs>
	);
};
export default MapFilter;