/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:32:05
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 09:53:58
 */

import React from "react";
import { CircleItem, ViewProps } from "model/map";
import { CircleMarker } from '@pansy/react-amap';

const CircleView: React.FunctionComponent<ViewProps> = ({ data, callback, visible }: ViewProps) => {
	return (
		<React.Fragment>
			{
				(data as CircleItem[]).map((item: CircleItem, index: number) => (
					<CircleMarker center={item.center} radius={item.radius} key={index} events={callback(item.id)} visible={visible} />
				))
			}
		</React.Fragment>
	);
};
export default CircleView;