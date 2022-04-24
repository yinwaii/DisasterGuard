/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:34:46
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 02:17:23
 */

import React from "react";
import { PolygonItem } from "model/map";
import { Polygon } from '@pansy/react-amap';

interface PolygonViewProps {
	data: PolygonItem[]
}

const PolygonView: React.FunctionComponent<PolygonViewProps> = ({ data }: PolygonViewProps) => {
	console.log(1, data);
	return (
		<React.Fragment>
			{
				data.map((item: PolygonItem, index: number) => (
					<Polygon path={item.vertex} key={index} />
				))
			}
		</React.Fragment>
	);
};
export default PolygonView;