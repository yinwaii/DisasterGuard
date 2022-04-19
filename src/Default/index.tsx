/*
 * @Author: yinwai
 * @Date:   2022-04-19 14:24:05
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 14:41:49
 */

import React from "react";
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import Discovery from './Discovery';
import Communication from './Communication';
import Personal from './Personal';
import Bottom from "./Bottom";
import PageStyle from '../Page.module.scss'

const DefaultPage: React.FunctionComponent = () => {
	return (
		<div className={PageStyle.root}>
			<div className='head'>
				<NavBar back={null}>DisasterGuard</NavBar>
			</div>
			<div className='body'>
				<Routes>
					<Route path='/discovery' element={<Discovery />}></Route>
					<Route path='/communication' element={<Communication />}></Route>
					<Route path='/personal' element={<Personal />}></Route>
				</Routes>
			</div>
			<div className='bottom'>
				<Bottom />
			</div>
		</div>
	);
};

export default DefaultPage;