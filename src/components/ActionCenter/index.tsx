/*
 * @Author: yinwai
 * @Date:   2022-05-05 15:12:41
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 04:06:44
 */

import { ActionSheet } from "antd-mobile";
import { Action } from "antd-mobile/es/components/action-sheet";
import React, { useContext, useEffect, useState } from "react";

export interface ActionContextProps {
	sheet?: React.ReactNode,
	global?: any,
	setGlobal: (global: any) => void,
	setVisible: (visible: boolean) => void,
	setActions: (actions: Action[]) => void
};

export const ActionContext: React.Context<ActionContextProps> = React.createContext(
	{
		setGlobal: (global: any) => { },
		setActions: (actions: Action[]) => { },
		setVisible: (visible: boolean) => { },
	}
);

export const useActionCenter = () => {
	const [visible, setVisible] = useState(false);
	const [actions, setActions] = useState<Action[]>([]);
	const [global, setGlobal] = useState();
	const sheet: React.ReactNode = (<ActionSheet visible={visible} actions={actions} onClose={()=>setVisible(false)} style={{}} closeOnMaskClick={true} closeOnAction={true}/>);
	return {sheet, global, setGlobal, setVisible, setActions};
};

export const useActions = (actions: Action[], params?: any[]) => {
	const actionContext = useContext(ActionContext);
	useEffect(() => {
		actionContext.setActions(actions)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},params ?? []);
}

export const useGlobal = (global?: any, params?: any[]) => {
	const actionContext = useContext(ActionContext);
	return [actionContext.global, actionContext.setGlobal];
}
export {type Action};