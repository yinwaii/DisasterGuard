/*
 * @Author: yinwai
 * @Date:   2022-05-19 01:04:18
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 17:30:47
 */

import React, { useRef, useEffect } from "react";
import { MouseTool } from "@pansy/react-amap";
export type MapAdder = [React.ReactNode, any];
const useMapAdder = (setResult: any) => {
	const mouseTool = useRef<AMap.MouseTool>();
	const events = {
		created: (instance: AMap.MouseTool) => {
			mouseTool.current = instance;
		},
		draw: (event: any) => {
			console.log(event);
			switch (event.obj.className) {
				case "Overlay.Polyline":
					setResult({
						data: 
							{
								route: event.obj._opts.path,
								id: 0
							}
						,
						type: 'path'
					});
					console.log(event.obj._opts.path);
					break;
				case "Overlay.Polygon":
					setResult({
						data: 
							{
								vertex: event.obj._opts.path,
								id: 0
							}
						,
						type: 'polygon'
					});
					console.log(event.obj._opts.path);
					break;
				case "Overlay.Circle":
					setResult({
						data: 
							{
								center: {
									lng: event.obj._opts.center.lng,
									lat: event.obj._opts.center.lat
								},
								radius: event.obj._opts.radius,
								id: 0
							}
						,
						type: 'circle'
					});
					console.log(event.obj._opts.center.lng, event.obj._opts.center.lat, event.obj._opts.radius);
					break;
				case "AMap.Marker":
					setResult({
						data: 
							{
								position: {
									lng: event.obj._position.lng,
									lat: event.obj._position.lat
								},
								id: 0
							}
						,
						type: 'marker'
					});
					console.log(event.obj._position.lng, event.obj._position.lat);
					break;
			}
			if (mouseTool.current)
				mouseTool.current.close();
		}
	};
	const mapAdder: MapAdder = [(<MouseTool events={events} />), mouseTool];
	return mapAdder;
};
export default useMapAdder;