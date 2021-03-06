/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:21:47
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 17:54:09
 */

export interface Position {
	lng: number,
	lat: number,
};

export interface MarkerItem {
	id: number,
	position: Position,
	weight?: number,
	lnglat?: Position
};

export interface CircleItem {
	id: number,
	center: Position,
	radius: number
};

export interface PolygonItem {
	id: number,
	vertex: Position[]
};

export interface PathItem {
	id: number,
	route: Position[]
};

export type MapItem = MarkerItem | CircleItem | PolygonItem | PathItem;

export interface ViewProps {
	data: MapItem[],
	callback: (id: number) => { click: () => void },
	visible: boolean,
	curId?: number,
	modify?: boolean
};

export type TypedViewProps = ViewProps & {
	type: 'Marker' | 'Circle' | 'Polygon' | 'Path' | 'refresh',
};

export type QueryViewProps = {
	query: string
};

export interface Detail {
	title: string,
	content: string
}

// export interface MapItem {
// 	data: MapItemData,
// 	visible?: boolean,
// 	type: string
// }