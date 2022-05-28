/*
 * @Author: yinwai
 * @Date:   2022-04-25 00:59:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-28 17:58:42
 */

import React from "react";
import { Map } from '@pansy/react-amap';

interface MapManagerProps {
	children?: React.ReactNode,
	callback?: () => void
};

const MapManager: React.FunctionComponent<MapManagerProps> = ({ children, callback }: MapManagerProps) => {
	const subCallback = { 'click': () => { if (callback) callback(); } };
	return (
		<Map mapKey="17faa7432c71fe7a2eab0475d6f4c638" events={subCallback}>
			{children}
		</Map>
	);
}
export default MapManager;