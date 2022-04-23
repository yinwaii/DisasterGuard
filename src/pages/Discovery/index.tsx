/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 20:55:45
 */

import React, { useState } from "react";
import MapFilter, { Filter } from "./MapFilter";
import MapView, { MapItem } from "../../components/MapView"

const Discovery: React.FunctionComponent = () => {
	const defaultFilter: Filter = (item: MapItem) => { return false; };
	const [filter, setFilter] = useState(() => defaultFilter);
	return (
		<React.Fragment>
			<MapFilter updateFilter={setFilter}></MapFilter>
			<MapView mapFilter={filter}></MapView>
		</React.Fragment>
	);
}
export default Discovery;