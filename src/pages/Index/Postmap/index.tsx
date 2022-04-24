/*
 * @Author: yinwai
 * @Date:   2022-04-24 20:05:35
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 20:11:19
 */

import { FloatingPanel } from "antd-mobile";
import React from "react";

const PostMap: React.FunctionComponent = () => {
	const anchors = [100, window.innerHeight * 0.4, window.innerHeight];
	return (
		<FloatingPanel anchors={anchors}>
			硕大的撒
		</FloatingPanel>
	);
}