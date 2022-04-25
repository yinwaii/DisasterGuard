/*
 * @Author: yinwai
 * @Date:   2022-04-24 15:56:41
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 09:52:29
 */

import React from "react";
import { NavBar, Space } from "antd-mobile";
import { RedoOutline, MoreOutline } from 'antd-mobile-icons';
import { useNavigate, useSearchParams } from "react-router-dom";
import Styles from './index.module.scss';

const PackedNavBar: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const onBack = () => { navigate(-1) };
	const onRefresh = () => { window.location.reload() };
	const right = (
		<div style={{ fontSize: 24 }}>
			<Space style={{ '--gap': '16px' }}>
				<RedoOutline onClick={onRefresh}/>
				<MoreOutline id="more"/>
			</Space>
		</div>
	)
	return (
		<NavBar onBack={onBack} className={Styles.root} right={right}>{searchParams.has('title') ? searchParams.get('title') : 'Disaster Guard'}</NavBar>
	);
}
export default PackedNavBar;