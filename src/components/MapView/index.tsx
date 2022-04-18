/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 17:07:20
 */

import React, { useState } from "react";
import { Map, Marker, MarkerCluster, Circle, Polygon, Polyline } from "@pansy/react-amap";
import { Filter } from "../MapFilter";
import data from "../../pages/Discovery/data"

type Position = [number, number];
interface MarkerData {
	position: Position
};

interface MarkersData {
	positions: {lnglat: Position, extData: number}[]
};

interface CircleData {
	center: Position,
	radius: number
};

interface PolygonData {
	vertex: Position[]
};

interface PathData {
	route: Position[]
}

type MapItemData = MarkerData | MarkersData | CircleData | PolygonData | PathData;

export interface MapItem {
	data: MapItemData,
	visible?: boolean,
	type: string
}

interface MapViewProps {
	mapFilter: Filter
};

const MapView: React.FunctionComponent<MapViewProps> = ({ mapFilter }: MapViewProps) => {
	const [items] = useState(data);
	return (
		<Map mapKey="17faa7432c71fe7a2eab0475d6f4c638">{
			items.filter(mapFilter).map((item: MapItem, index: number) => {
				const data: MapItemData = item.data;
				if ("position" in data)
					return (<Marker position={data.position} key={index}></Marker>);
				else if ("positions" in data) {
					return (<MarkerCluster data={data.positions} key={index}></MarkerCluster>);
				}
				else if ("center" in data && "radius" in data)
					return (<Circle center={data.center} radius={data.radius} bubble={false} key={index}></Circle>);
				else if ("vertex" in data)
					return (<Polygon path={data.vertex} key={index}></Polygon>);
				else if ("route" in data)
					return (<Polyline path={data.route} key={index}></Polyline>);
				else
					return undefined;
			})
		}
			<Circle center={[120,30]} radius={100000000}></Circle>
		</Map>
	);
}
export default MapView;