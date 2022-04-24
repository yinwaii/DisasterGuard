/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 23:33:52
 */

import React, { useEffect } from "react";
import useAxios from 'axios-hooks';
import { useNavigate } from "react-router-dom";
import { TypedViewProps } from 'model/map';
import { Loading, ErrorBlock, MarkerView, CircleView, PolygonView, PathView } from "components";
import { toUrl, Params } from "utils/request";

interface MapViewProps {
	query: Params
};

const MetaView: React.FunctionComponent<TypedViewProps> = ({ data, type, callback }: TypedViewProps) => {
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

const MapView: React.FunctionComponent<MapViewProps> = ({ query }: MapViewProps) => {
	const [{ data, loading, error }, refetch] = useAxios(toUrl('/map/getItems', query));
	const navigate = useNavigate();
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
	const callback = (id: number) => ({ 'click': () => { navigate(toUrl('details', { id: String(id) })); } });
	return (<MetaView type={mapView.type} data={mapView.data} callback={callback}/>);
};

export default MapView;