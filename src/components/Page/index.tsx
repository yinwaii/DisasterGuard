/*
 * @Author: yinwai
 * @Date:   2022-04-23 21:47:47
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 22:28:30
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Styles from './index.module.scss';

const Page: React.FunctionComponent = () => {
	return (
		<div className={Styles.root}>
			<Outlet />
		</div>
	);
};

export const Body: React.FunctionComponent = () => {
	return (
		<div className={Styles.body}>
			<Outlet />
		</div>
	);
};

export const Box: React.FunctionComponent = () => {
	return (
		<div className={Styles.box}>
			<Outlet />
		</div>
	);
};

export default Page;