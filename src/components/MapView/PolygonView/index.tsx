/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:34:46
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 01:36:35
 */

import React from "react";
import { PolygonItem, ViewProps } from "model/map";
import { Polygon } from '@pansy/react-amap';

const PolygonView: React.FunctionComponent<ViewProps> = ({ data, callback, visible }: ViewProps) => {
	return (
		<React.Fragment>
			{
				(data as PolygonItem[]).map((item: PolygonItem, index: number) => (
					<Polygon path={item.vertex} key={index} events={callback(item.id)} visible={visible} />
				))
			}
		</React.Fragment>
	);
};
export default PolygonView;