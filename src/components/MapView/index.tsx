/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 02:37:33
 */

import React, { useState, useEffect } from "react";
import useAxios from 'axios-hooks';
import { MapItem, MarkerItem, CircleItem, PolygonItem, PathItem } from 'model/map';
import MarkerView from "./MarkerView";
import CircleView from "./CircleView";
import PolygonView from "./PolygonView";
import PathView from "./PathView";
// import { data } from "./data"

interface MapViewProps {
	type: string
};

interface MapViewData {
	data: MapItem[],
	type: 'marker' | 'circle' | 'polygon' | 'path'
}

const MapView: React.FunctionComponent<MapViewProps> = ({ type }: MapViewProps) => {
	const [{ data, loading, error }, refetch] = useAxios('/map/getItems');
	useEffect(() => {
		const updateData = async () => {
			await refetch();
			console.log(data);
		};
		updateData();
	}, [type, refetch]);
	if (loading) return (<div>加载中</div>);
	if (error) return (<div>失败</div>);
	let mapViewData: MapViewData = data.data;
	switch (mapViewData.type) {
		case 'marker':
			return (<MarkerView data={mapViewData.data as MarkerItem[]} />);
		case 'circle':
			return (<CircleView data={mapViewData.data as CircleItem[]} />);
		case 'polygon':
			return (<PolygonView data={mapViewData.data as PolygonItem[]} />);
		case 'path':
			return (<PathView data={mapViewData.data as PathItem[]} />);
		default:
			return <div></div>;
	}
}
export default MapView;