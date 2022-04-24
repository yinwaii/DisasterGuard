/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:23:57
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 13:43:28
 */

import React from "react";
import { MarkerItem, ViewProps } from "model/map";
import { Marker } from '@pansy/react-amap';

const MarkerView: React.FunctionComponent<ViewProps> = ({ data }: ViewProps) => {
	return (
		<React.Fragment>
			{
				(data as MarkerItem[]).map((item: MarkerItem, index: number) => (
					<Marker position={item.position} key={index} />
				))
			}
		</React.Fragment>
	);
};
export default MarkerView;