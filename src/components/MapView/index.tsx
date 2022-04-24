/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 19:24:52
 */

import React, { useEffect } from "react";
import useAxios from 'axios-hooks';
import { TypedViewProps } from 'model/map';
import { MarkerView, CircleView, PolygonView, PathView } from "components";
import { toUrl, Params } from "utils/request";
import { Loading, ErrorBlock } from 'components';

interface MapViewProps {
	query: Params
};

const MetaView: React.FunctionComponent<TypedViewProps> = ({ data, type }: TypedViewProps) => {
	switch (type) {
		case 'marker':
			return (<MarkerView data={data} />);
		case 'circle':
			return (<CircleView data={data} />);
		case 'polygon':
			return (<PolygonView data={data} />);
		case 'path':
			return (<PathView data={data} />);
	}
};

const MapView: React.FunctionComponent<MapViewProps> = ({ query }: MapViewProps) => {
	const [{ data, loading, error }, refetch] = useAxios(toUrl('/map/getItems', query));
	useEffect(() => {
		const updateData = async () => {
			await refetch();
		};
		updateData();
		// eslint-disable-next-line
	}, [query, refetch]);
	if (loading) return (<Loading />);
	if (error) return (<ErrorBlock />);
	let mapView: TypedViewProps = data.data;
	return (<MetaView type={mapView.type} data={mapView.data} />);
};

export default MapView;