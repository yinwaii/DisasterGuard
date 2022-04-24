/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 01:41:42
 */

import React, { useEffect } from "react";
import useAxios from 'axios-hooks';
import { MapItem, TypedViewProps } from 'model/map';
import { Loading, ErrorBlock, MarkerView, CircleView, PolygonView, PathView } from "components";
import { toUrl, Params } from "utils/request";

interface MapViewProps {
	query: Params,
	callback?: (id: number) => void;
};

export const SwitchMetaView: React.FunctionComponent<TypedViewProps> = ({ data, type, callback }: TypedViewProps) => {
	switch (type) {
		case 'marker':
			return (<MarkerView data={data} callback={callback} />);
		case 'circle':
			return (<CircleView data={data} callback={callback} />);
		case 'polygon':
			return (<PolygonView data={data} callback={callback} />);
		case 'path':
			return (<PathView data={data} callback={callback} />);
	}
};

export const VisibleMetaView: React.FunctionComponent<TypedViewProps> = ({ data, type, callback }: TypedViewProps) => {
	return (
		<React.Fragment>
			<MarkerView data={type === 'marker' ? data : []} callback={callback} visible={type === 'marker'}/>
			<CircleView data={type === 'circle' ? data : []} callback={callback} visible={type === 'circle'}/>
			<PolygonView data={type === 'polygon' ? data : []} callback={callback} visible={type === 'polygon'}/>
			<PathView data={type === 'path' ? data : []} callback={callback} visible={type === 'path'}/>
		</React.Fragment>
	)
};

const MapView: React.FunctionComponent<MapViewProps> = ({ query, callback }: MapViewProps) => {
	const [{ data, loading, error }] = useAxios(toUrl('/map/getItems', query));
	// console.log(data);
	// useEffect(() => {
	// 	const updateData = async () => {
	// 		await refetch();
	// 	};
	// 	updateData();
	// 	// eslint-disable-next-line
	// }, [query, refetch]);
	if (loading) return (<Loading />);
	if (error) return (<ErrorBlock />);
	let mapView: TypedViewProps = data.data;
	const subCallback = (id: number) => ({ 'click': () => { if (callback) callback(id); } });
	return (<VisibleMetaView type={mapView.type} data={mapView.data} callback={subCallback}/>);
};

export default MapView;