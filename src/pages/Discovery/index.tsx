/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-08 15:35:47
 */

import React, { useContext, useEffect, useState } from "react";
import { JumboTabs } from "antd-mobile";
import { Outlet, useNavigate } from "react-router-dom";
import { MapView, MapManager, ActionContext, ActionContextProps, Action } from "components";
import { tabs } from "./data";
import Styles from './index.module.scss';
import { toUrl } from "utils/request";

export interface Tab {
	key: string,
	title: string,
	description: string
};

const Discovery: React.FunctionComponent = () => {
	const actionContext: ActionContextProps = useContext(ActionContext);
	const actions: Action[] = [
		{
			text: "时擦",
			key: "sdad"
		},
		{
			text: "萨迪克几哈",
			key: "sdd"
		}
	];
	const [typeKey, setTypeKey] = useState('supplies');
	const navigate = useNavigate();
	// console.log(actionContext(()=>{console.log("dasda")}));
	useEffect(() => {
		actionContext.setActions(actions)
	}, []);
	// setActions(actions);
	const callback_map = () => {
		navigate('.');
	}
	const callback_view = (id: number) => {
		navigate(toUrl('details', { id: String(id) }));
	};
	const updateKey = async (key: string) => {
		await setTypeKey('refresh');
		await setTypeKey(key);
		navigate('.');
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
				<MapManager callback={callback_map}>
					<MapView query={{ type: typeKey }} callback={callback_view}/>
				</MapManager>
			</div>
			<div className="details">
				<Outlet />
			</div>
		</div>
	);
}
export default Discovery;