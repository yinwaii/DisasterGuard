/*
 * @Author: yinwai
 * @Date:   2022-04-23 21:12:28
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 10:38:15
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TabBar from 'components/TabBar';
import NavBar from 'components/NavBar';
import { Discovery, Details } from 'pages/Discovery/path';
import { Group, Market, Community, Organization, Communication, Postmap } from 'pages/Index/path';
import { Identity, Profile, Setting, QR, Personal } from 'pages/Personal/path';
import Styles from './index.module.scss';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<div className={Styles.root}>
				<NavBar/>
				<div className={Styles.body}>
					<Routes>
						<Route path='discovery' element={<Discovery />}>
							<Route path='details' element={<Details/>}></Route>
						</Route>
						<Route index element={<Communication />}/>
						<Route path='group' element={<Group />}></Route>
						<Route path='market' element={<Market />}></Route>
						<Route path='community' >
							<Route index element={<Community />} />
							<Route path='postmap' element={<Postmap />} />
						</Route>
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
				<TabBar />
			</div>
		</BrowserRouter>
	);
}
export default Router;