/*
 * @Author: yinwai
 * @Date:   2022-05-05 15:12:41
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-08 15:45:44
 */

import { ActionSheet } from "antd-mobile";
import { Action } from "antd-mobile/es/components/action-sheet";
import React, { useState } from "react";
import Styles from './index.module.scss';

export interface ActionContextProps {
	sheet?: React.ReactNode,
	setVisible: (visible: boolean) => void,
	setActions: (actions: Action[]) => void
};

export const ActionContext: React.Context<ActionContextProps> = React.createContext(
	{
		setActions: (actions: Action[]) => { },
		setVisible: (visible: boolean) => { },
	}
);

export const useActionCenter = () => {
	const [visible, setVisible] = useState(false);
	const [actions, setActions] = useState<Action[]>([]);
	const sheet: React.ReactNode = (<ActionSheet visible={visible} actions={actions} onClose={() => setVisible(false)} style={{}}/>);
	return {sheet, setVisible, setActions};
};
export {type Action};