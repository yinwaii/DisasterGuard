/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:36:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 01:36:20
 */

import React from "react";
import { PathItem, ViewProps } from "model/map";
import { Polyline } from '@pansy/react-amap';

const PathView: React.FunctionComponent<ViewProps> = ({ data, callback, visible }: ViewProps) => {
	return (
		<React.Fragment>
			{
				(data as PathItem[]).map((item: PathItem, index: number) => (
					<Polyline path={item.route} key={index} visible={visible} />
				))
			}
		</React.Fragment>
	);
};
export default PathView;