/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:36:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 02:17:22
 */

import React from "react";
import { PathItem } from "model/map";
import { Polyline } from '@pansy/react-amap';

interface PathViewProps {
	data: PathItem[]
}

const PathView: React.FunctionComponent<PathViewProps> = ({ data }: PathViewProps) => {
	console.log(1, data);
	return (
		<React.Fragment>
			{
				data.map((item: PathItem, index: number) => (
					<Polyline path={item.route} key={index} />
				))
			}
		</React.Fragment>
	);
};
export default PathView;