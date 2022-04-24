/*
 * @Author: yinwai
 * @Date:   2022-04-24 18:21:49
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 19:17:08
 */

import { Mask, SpinLoading } from "antd-mobile";
import React from "react";
import Styles from './index.module.scss';

const Loading: React.FunctionComponent = () => {
	return (
		<Mask opacity={'thin'}>
			<div className={Styles.overlayContent}>
				<SpinLoading className="spin"/>
				<div className="text">加载中</div>
			</div>
		</Mask>
	);
}
export default Loading;