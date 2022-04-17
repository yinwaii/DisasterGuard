/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:50:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 02:03:18
 */

import React from "react";
import MapView from "../../components/MapItem"

const Discovery: React.FunctionComponent = () => {
	return (
		// <Map amapkey="17faa7432c71fe7a2eab0475d6f4c638"></Map>
		<div>
			<div>发现</div>
			<MapView items={[]}></MapView>
			{/* <Map amapkey="17faa7432c71fe7a2eab0475d6f4c638"></Map> */}
		</div>
	);
}
export default Discovery;