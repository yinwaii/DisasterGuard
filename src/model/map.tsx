/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:21:47
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 13:51:10
 */

export interface Position {
	lng: number,
	lat: number,
};

export interface MarkerItem {
	position: Position,
	weight?: number,
	lnglat?: Position
};

export interface CircleItem {
	center: Position,
	radius: number
};

export interface PolygonItem {
	vertex: Position[]
};

export interface PathItem {
	route: Position[]
};

export type MapItem = MarkerItem | CircleItem | PolygonItem | PathItem;

export interface ViewProps {
	data: MapItem[]
};

export type TypedViewProps = ViewProps & {
	type: 'marker' | 'circle' | 'polygon' | 'path'
};

export type QueryViewProps = {
	query: string
};

// export interface MapItem {
// 	data: MapItemData,
// 	visible?: boolean,
// 	type: string
// }