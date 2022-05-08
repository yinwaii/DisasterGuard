/*
 * @Author: yinwai
 * @Date:   2022-04-24 15:56:41
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-08 15:18:52
 */

import React from "react";
import { NavBar, Space } from "antd-mobile";
import { RedoOutline, MoreOutline } from 'antd-mobile-icons';
import { useNavigate, useSearchParams } from "react-router-dom";
import Styles from './index.module.scss';

interface NavBarProps {
	actionCallback: () => void
}

const PackedNavBar: React.FunctionComponent<NavBarProps> = ({actionCallback}) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const onBack = () => { navigate(-1) };
	const onRefresh = () => { window.location.reload() };
	const right = (
		<div className={Styles.right}>
			<Space className="space">
				<RedoOutline onClick={onRefresh}/>
				<MoreOutline onClick={actionCallback}/>
			</Space>
		</div>
	)
	console.log(actionCallback);
	return (
		<NavBar onBack={onBack} className={Styles.root} right={right}>{searchParams.has('title') ? searchParams.get('title') : 'Disaster Guard'}</NavBar>
	);
}
export default PackedNavBar;