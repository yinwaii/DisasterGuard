/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:32:05
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 11:03:20
 */

import React from "react";
import { CircleItem } from "model/map";
import { CircleMarker } from '@pansy/react-amap';

interface CircleViewProps {
	data: CircleItem[]
}

const CircleView: React.FunctionComponent<CircleViewProps> = ({ data }: CircleViewProps) => {
	console.log(1, data);
	return (
		<React.Fragment>
			{
				data.map((item: CircleItem, index: number) => (
					<CircleMarker center={item.center} radius={item.radius} key={index} />
				))
			}
		</React.Fragment>
	);
};
export default CircleView;