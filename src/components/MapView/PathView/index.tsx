/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:36:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 15:21:58
 */

import React from "react";
import { PathItem, ViewProps, Position } from "model/map";
import { Marker, PolyEditor, Polyline } from '@pansy/react-amap';

const PathView: React.FunctionComponent<ViewProps> = ({ data, callback, visible, modify, curId }: ViewProps) => {
	return (
		<React.Fragment>
			{
				(data as PathItem[]).map((item: PathItem, index: number) => (
					<React.Fragment key={index}>
						<Polyline path={item.route} visible={visible}>
							<PolyEditor active={modify === true && curId === item.id} />
						</Polyline>
						{
							item.route.map((pos: Position, index: number) => (
								<Marker position={pos} key={index} events={callback(item.id)} visible={modify === false} draggable={modify === true && item.id === curId} />
							))
						}
					</React.Fragment>
				))
			}
		</React.Fragment>
	);
};
export default PathView;