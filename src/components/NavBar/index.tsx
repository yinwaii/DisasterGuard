/*
 * @Author: yinwai
 * @Date:   2022-04-24 15:56:41
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 17:41:03
 */

import React from "react";
import { NavBar } from "antd-mobile";
import { useNavigate, useSearchParams } from "react-router-dom";
import Styles from './index.module.scss';

const PackedNavBar: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const onBack = () => { navigate(-1) };
	console.log(searchParams);
	return (
		<NavBar onBack={onBack} className={Styles.root}>{searchParams.has('title') ? searchParams.get('title') : 'Disaster Guard'}</NavBar>
	);
}
export default PackedNavBar;