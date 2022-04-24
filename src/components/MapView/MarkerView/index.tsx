/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:23:57
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 02:17:09
 */

import React from "react";
import { MarkerItem } from "model/map";
import { Marker } from '@pansy/react-amap';

interface MarkerViewProps {
	data: MarkerItem[]
}

const MarkerView: React.FunctionComponent<MarkerViewProps> = ({ data }: MarkerViewProps) => {
	console.log(1, data);
	return (
		<React.Fragment>
			{
				data.map((item: MarkerItem, index: number) => (
					<Marker position={item.position} key={index} />
				))
			}
		</React.Fragment>
	);
};
export default MarkerView;