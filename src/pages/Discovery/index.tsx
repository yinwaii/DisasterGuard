/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 21:06:45
 */

import React, { useState } from "react";
import { JumboTabs } from "antd-mobile";
import { Outlet } from "react-router-dom";
import { MapView } from "components";
import { Map } from '@pansy/react-amap';
import { tabs } from "./data";
import Styles from './index.module.scss';

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
		<div className={Styles.root}>
			<div className="head">
				<JumboTabs activeKey={typeKey} onChange={updateKey}>
					{tabs.map(item => {
						return <JumboTabs.Tab key={item.key} title={item.title} description={item.description}></JumboTabs.Tab>
					})}
				</JumboTabs>
			</div>
			<div className="body">
				<Map mapKey="17faa7432c71fe7a2eab0475d6f4c638">
					<MapView query={{ type: typeKey }} />
					<MapView query={{ type: typeKey }} />
					<MapView query={{ type: typeKey }} />
				</Map>
			</div>
			<div className="details">
				<Outlet />
			</div>
		</div>
	);
}
export default Discovery;