/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:34:46
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 00:27:46
 */

import React from "react";
import { PolygonItem, ViewProps } from "model/map";
import { Polygon, PolygonEditor } from '@pansy/react-amap';

const PolygonView: React.FunctionComponent<ViewProps> = ({ data, callback, visible, modify, curId }: ViewProps) => {
	return (
		<React.Fragment>
			{
				(data as PolygonItem[]).map((item: PolygonItem, index: number) => (
					<Polygon path={item.vertex} key={index} events={callback(item.id)} visible={visible} bubble={false}>
						<PolygonEditor active={modify === true && item.id === curId} />
					</Polygon>
				))
			}
		</React.Fragment>
	);
};
export default PolygonView;