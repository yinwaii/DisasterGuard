/*
 * @Author: yinwai
 * @Date:   2022-05-19 01:04:18
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 01:32:28
 */

import React, {useRef} from "react";
import { MouseTool } from "@pansy/react-amap";
export type MapAdder = [React.ReactNode, AMap.MouseTool | undefined];
const useMapAdder = () => {
	const mouseTool = useRef<AMap.MouseTool>();
	const events = {
		created: (instance: AMap.MouseTool) => {
			mouseTool.current = instance;
		},
		draw: (event: any) => {
			console.log(event);
			if (mouseTool.current)
				mouseTool.current.close();
		}
	};
	const mapAdder: MapAdder = [(<MouseTool events={events} />), mouseTool.current];
	return mapAdder;
};
export default useMapAdder;