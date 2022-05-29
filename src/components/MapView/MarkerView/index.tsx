/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:23:57
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 17:54:49
 */

import React from "react";
import { MarkerItem, ViewProps } from "model/map";
import { Marker } from '@pansy/react-amap';

const MarkerView: React.FunctionComponent<ViewProps> = ({ data, callback, visible, modify, curId }: ViewProps) => {
	return (
		<React.Fragment>
			{
				(data as any).items.map((item: MarkerItem, index: number) => (
					<Marker position={item.position} extData={item.weight} key={index} events={callback(item.id)} visible={visible} draggable={modify === true && item.id === curId} />
				))
			}
		</React.Fragment>
	);
};
export default MarkerView;