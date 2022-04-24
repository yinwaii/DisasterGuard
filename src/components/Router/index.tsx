/*
 * @Author: yinwai
 * @Date:   2022-04-23 21:12:28
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 19:26:20
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TabBar from 'components/TabBar';
import NavBar from 'components/NavBar';
import { Discovery } from 'pages/Discovery/path';
import { Group, Market, Community, Organization, Communication } from 'pages/Index/path';
import { Identity, Profile, Setting, QR, Personal } from 'pages/Personal/path';
import Styles from './index.module.scss';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<div className={Styles.root}>
				<Routes>
					<Route path='market' element={<NavBar />}></Route>
					<Route path='community' element={<NavBar />}></Route>
					<Route path='organization' element={<NavBar />}></Route>
					<Route path='group' element={<NavBar />}></Route>
					<Route path='personal'>
						<Route path='identity' element={<NavBar />}></Route>
						<Route path='profile' element={<NavBar />}></Route>
						<Route path='setting' element={<NavBar />}></Route>
						<Route path='qr' element={<NavBar />}></Route>
					</Route>
				</Routes>
				<div className={Styles.body}>
					<Routes>
						<Route path='/*' element={<Navigate to={'discovery'} />} />
						<Route path='discovery' element={<Discovery />}></Route>
						<Route path='' element={<Communication />}></Route>
						<Route path='group' element={<Group />}></Route>
						<Route path='market' element={<Market />}></Route>
						<Route path='community' element={<Community />}></Route>
						<Route path='organization' element={<Organization />}></Route>
						<Route path='personal'>
							<Route index element={<Personal />}></Route>
							<Route path='identity' element={<Identity />}></Route>
							<Route path='profile' element={<Profile />}></Route>
							<Route path='setting' element={<Setting />}></Route>
							<Route path='qr' element={<QR />}></Route>
						</Route>
					</Routes>
				</div>
				<Routes>
					<Route path='discovery' element={<TabBar />}></Route>
					<Route path='' element={<TabBar />}></Route>
					<Route path='personal' element={<TabBar />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default Router;