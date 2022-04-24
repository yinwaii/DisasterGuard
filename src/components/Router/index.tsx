/*
 * @Author: yinwai
 * @Date:   2022-04-23 21:12:28
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 11:16:37
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TabBar from 'components/TabBar';
import Page, { Body } from 'components/Page';
import Discovery from 'pages/Discovery';
import Communication from 'pages/Communication';
import Personal from 'pages/Personal';
import Group from 'pages/Communication/Group';
import Market from 'pages/Communication/Market';
import Community from 'pages/Communication/Community';
import Organization from 'pages/Communication/Organization';
import Identity from 'pages/Personal/Identity';
import Profile from 'pages/Personal/Profile';
import Setting from 'pages/Personal/Setting';
import QR from 'pages/Personal/QR';

const Router: React.FunctionComponent = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Page />}>
					<Route index element={<Navigate to={'discovery'} />} />
					<Route element={<Body />}>
						<Route path='discovery' element={<Discovery />}></Route>
						<Route path='communication' element={<Communication />}></Route>
						<Route path='group' element={<Group />}></Route>
						<Route path='market' element={<Market />}></Route>
						<Route path='community' element={<Community />}></Route>
						<Route path='organization' element={<Organization />}></Route>
						<Route path='personal'>
							<Route index element={<Personal/>}></Route>
							<Route path='identity' element={<Identity />}></Route>
							<Route path='profile' element={<Profile />}></Route>
							<Route path='setting' element={<Setting />}></Route>
							<Route path='qr' element={<QR />}></Route>
						</Route>
					</Route>
				</Route>
			</Routes>
			<Routes>
				<Route path='discovery' element={<TabBar />}></Route>
				<Route path='communication' element={<TabBar />}></Route>
				<Route path='personal' element={<TabBar />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
export default Router;