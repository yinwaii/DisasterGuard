/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 15:01:52
 */

import React, { useState } from "react";
import { JumboTabs } from "antd-mobile";
import { MapView } from "components/MapView";
import { Map } from '@pansy/react-amap';
import { tabs } from "./data";

export interface Tab {
	key: string,
	title: string,
	description: string
};

const Discovery: React.FunctionComponent = () => {
	const [typeKey, setTypeKey] = useState('supplies');
	const updateKey = (key: string) => {
		setTypeKey(key);
	};
	return (
		<React.Fragment>
			<JumboTabs activeKey={typeKey} onChange={updateKey}>
				{tabs.map(item => {
					return <JumboTabs.Tab key={item.key} title={item.title} description={item.description}></JumboTabs.Tab>
				})}
			</JumboTabs>
			<Map mapKey="17faa7432c71fe7a2eab0475d6f4c638">
				<MapView query={{ type: typeKey }} />
				<MapView query={{ type: typeKey }} />
				<MapView query={{ type: typeKey }} />
			</Map>
		</React.Fragment>
	);
}
export default Discovery;