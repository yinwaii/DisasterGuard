/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 17:10:49
 */

import React, { useState } from "react";
import MapFilter, { Filter } from "../../components/MapFilter";
import MapView, { MapItem } from "../../components/MapView"
import "../pages.scss"

const Discovery: React.FunctionComponent = () => {
	const defaultFilter: Filter = (item: MapItem) => { return false; };
	const [filter, setFilter] = useState(() => defaultFilter);
	return (
		<div className="page app">
			<div className="page top">
				<MapFilter updateFilter={setFilter}></MapFilter>
			</div>
			<div className="page body">
				<MapView mapFilter={filter}></MapView>
			</div>
		</div>
	);
}
export default Discovery;