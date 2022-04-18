/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 09:18:13
 */

import React from "react";
import { LngLat, Path, Map, Marker, Markers, Circle, Polygon, Polyline } from "react-amap";

interface MarkerData {
	coordinate: LngLat
};

interface MarkersData {
	coordinates: LngLat[]
}

interface CircleData {
	center: LngLat,
	radius: number
};

interface PolygonData {
	vertex: Path
};

interface PathData {
	route: Path
}

type MapItemData = MarkerData | MarkersData | CircleData | PolygonData | PathData;

export interface MapItem {
	data: MapItemData,
	visible?: boolean,
	type: string
}

interface MapViewProps {
	items: MapItem[]
};

const MapView: React.FunctionComponent<MapViewProps> = ({ items }: MapViewProps) => {
	return (
		<Map amapkey="17faa7432c71fe7a2eab0475d6f4c638">{
			items.map((item: MapItem) => {
				const data: MapItemData = item.data;
				if ("coordinate" in data)
					return (<Marker position={data.coordinate}></Marker>);
				else if ("coordinates" in data)
					return (<Markers></Markers>);
				else if ("center" in data && "radius" in data)
					return (<Circle center={data.center} radius={data.radius} bubble={false}></Circle>);
				else if ("vertex" in data)
					return (<Polygon path={data.vertex}></Polygon>);
				else if ("route" in data)
					return (<Polyline path={data.route}></Polyline>);
				else
					return undefined;
			}).filter((item: React.ReactNode | undefined) => {
				return item !== undefined;
			})
		}</Map>
	);
}
MapView.defaultProps = { items: [] };
export default MapView;