/*
 * @Author: yinwai
 * @Date:   2022-04-23 21:12:28
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 22:37:21
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TabBar from 'components/TabBar';
import Discovery from 'pages/Discovery';
import Page, { Body } from 'components/Page';
import Communication from 'pages/Communication';
import Personal from 'pages/Personal';
import Group from 'pages/Communication/Group';
import Market from 'pages/Communication/Market';

const Router: React.FunctionComponent = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Page />}>
					<Route path='*' element={<Navigate to={'discovery'} />} />
					<Route element={<TabBar />}>
						<Route element={<Body />}>
							<Route path='discovery' element={<Discovery />}></Route>
							<Route path='communication' element={<Communication />}></Route>
							<Route path='personal' element={<Personal />}></Route>
						</Route>
					</Route>
					<Route path='group' element={<Group />}></Route>
					<Route path='market' element={<Market />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
export default Router;