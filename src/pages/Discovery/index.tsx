/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 09:03:32
 */

import React, { useState } from "react";
import MapFilter from "../../components/MapFilter";
import MapView, { MapItem } from "../../components/MapView"
import "./index.css"

const Discovery: React.FunctionComponent = () => {
	const defaultItem: MapItem[] = [];
	const [items, setItems] = useState(defaultItem);
	return (
		// <Map amapkey="17faa7432c71fe7a2eab0475d6f4c638"></Map>
		<div className="page app">
			<div className="page top">
				<MapFilter items={items} update={setItems}></MapFilter>
			</div>
			<div className="page body">
				<MapView items={items}></MapView>
			</div>
			{/* <Map amapkey="17faa7432c71fe7a2eab0475d6f4c638"></Map> */}
		</div>
	);
}
export default Discovery;