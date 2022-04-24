/*
 * @Author: yinwai
 * @Date:   2022-04-24 01:21:47
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 02:09:22
 */

interface Position {
	lng: number,
	lat: number,
};

export interface MarkerItem {
	position: Position,
	weight?: number,
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

// export interface MapItem {
// 	data: MapItemData,
// 	visible?: boolean,
// 	type: string
// }