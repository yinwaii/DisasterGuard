/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 00:25:00
 */

import React from "react";
import useAxios from 'axios-hooks';
import { TypedViewProps } from 'model/map';
import { Loading, ErrorBlock, MarkerView, CircleView, PolygonView, PathView } from "components";
import { toUrl, Params } from "utils/request";

interface MapViewProps {
	query?: Params,
	callback?: (id: number) => void,
	curId?: number,
	modify?: boolean
};

export const MetaView: React.FunctionComponent<TypedViewProps> = ({ data, type, callback, curId, modify }: TypedViewProps) => {
	return (
		<React.Fragment>
			<MarkerView data={type === 'marker' ? data : []} callback={callback} visible={type === 'marker'} modify={modify} curId={curId}/>
			<CircleView data={type === 'circle' ? data : []} callback={callback} visible={type === 'circle'} modify={modify} curId={curId}/>
			<PolygonView data={type === 'polygon' ? data : []} callback={callback} visible={type === 'polygon'} modify={modify} curId={curId}/>
			<PathView data={type === 'path' ? data : []} callback={callback} visible={type === 'path'} modify={modify} curId={curId}/>
		</React.Fragment>
	)
};

const MapView: React.FunctionComponent<MapViewProps> = ({ query, callback, curId, modify }: MapViewProps) => {
	const [{ data, loading, error }] = useAxios(query ? toUrl('/map/getItems', query) : '/map/getItems');
	if (loading) return (<Loading />);
	if (error) return (<ErrorBlock />);
	let mapView: TypedViewProps = data.data;
	const subCallback = (id: number) => ({ 'click': () => { if (callback) callback(id); } });
	return (<MetaView type={mapView.type} data={mapView.data} callback={subCallback} modify={modify} curId={curId} visible={true}/>);
};

export default MapView;