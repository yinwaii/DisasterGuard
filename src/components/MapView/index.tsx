/*
 * @Author: yinwai
 * @Date:   2022-04-18 00:07:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 11:00:40
 */

import React from "react";
import useAxios from 'axios-hooks';
import { TypedViewProps } from 'model/map';
import { Loading, ErrorBlock, MarkerView, CircleView, PolygonView, PathView } from "components";
import { toUrl, Params } from "utils/request";

interface MapViewProps {
	query?: Params,
	callback?: (id: number) => void;
};

export const MetaView: React.FunctionComponent<TypedViewProps> = ({ data, type, callback }: TypedViewProps) => {
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
	const [{ data, loading, error }] = useAxios(query ? toUrl('/map/getItems', query) : '/map/getItems');
	if (loading) return (<Loading />);
	if (error) return (<ErrorBlock />);
	let mapView: TypedViewProps = data.data;
	const subCallback = (id: number) => ({ 'click': () => { if (callback) callback(id); } });
	return (<MetaView type={mapView.type} data={mapView.data} callback={subCallback}/>);
};

export default MapView;