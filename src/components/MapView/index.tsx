/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 17:59:07
 */

import React from "react";
import useAxios from 'axios-hooks';
import { TypedViewProps } from 'model/map';
import { Loading, ErrorBlock, MarkerView, CircleView, PolygonView, PathView } from "components";
import { toUrl, Params } from "utils/request";
import { useEffect } from "react";

interface MapViewProps {
	query?: Params,
	callback?: (id: number) => void,
	curId?: number,
	modify?: boolean
};

export const MetaView: React.FunctionComponent<TypedViewProps> = ({ data, type, callback, curId, modify }: TypedViewProps) => {
	// console.log(data, type, modify)
	return (
		<React.Fragment>
			<MarkerView data={type === 'Marker' ? data : []} callback={callback} visible={type === 'Marker'} modify={modify} curId={curId}/>
			<CircleView data={type === 'Circle' ? data : []} callback={callback} visible={type === 'Circle'} modify={modify} curId={curId}/>
			<PolygonView data={type === 'Polygon' ? data : []} callback={callback} visible={type === 'Polygon'} modify={modify} curId={curId}/>
			<PathView data={type === 'Path' ? data : []} callback={callback} visible={type === 'Path'} modify={modify} curId={curId}/>
		</React.Fragment>
	)
};

const MapView: React.FunctionComponent<MapViewProps> = ({ query, callback, curId, modify }: MapViewProps) => {
	const [{ data, loading, error }, refetch] = useAxios(query ? toUrl('/map/getItems', query) : '/map/getItems');
	// useEffect(() => { refetch() }, [query, refetch]);
	if (loading) return (<Loading />);
	if (error) return (<ErrorBlock />);
	// return <div>{JSON.stringify(data)}</div>;
	let mapView: TypedViewProps = data.data;
	console.log(data);
	const subCallback = (id: number) => ({ 'click': () => { if (callback) callback(id); } });
	return (<MetaView type={mapView.type} data={mapView.data} callback={subCallback} modify={modify} curId={curId} visible={true}/>);
};

export default MapView;