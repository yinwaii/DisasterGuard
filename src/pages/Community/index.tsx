/*
 * @Author: yinwai
 * @Date:   2022-04-17 22:51:48
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 09:44:07
 */

import { SearchBar } from "antd-mobile";
import React from "react";
import "../pages.scss"

const Community: React.FunctionComponent = () => {
	return (
		<div className="page app">
			<div className="page head">
				<SearchBar></SearchBar>
			</div>
			<div className="page body">
			</div>
		</div>
	);
}
export default Community;