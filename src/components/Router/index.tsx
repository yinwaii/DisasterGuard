/*
 * @Author: yinwai
 * @Date:   2022-04-23 21:12:28
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 12:57:30
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TabBar from 'components/TabBar';
import NavBar from 'components/NavBar';
import { Discovery } from 'pages/Discovery/path';
import { Group, Market, Community, Organization, Communication, Postmap, Member } from 'pages/Index/path';
import { Identity, Profile, Setting, QR, Personal } from 'pages/Personal/path';
import { SignIn, LogIn } from 'pages/Login/path';
import Styles from './index.module.scss';
import { useActionCenter, ActionContext, ActionContextProps } from 'components/ActionCenter';

const Router: React.FunctionComponent = () => {
	const contextValue: ActionContextProps = useActionCenter();
	return (
		<BrowserRouter>
			<div className={Styles.root}>
				<NavBar actionCallback={() => { contextValue.setVisible(true) }} />
				<div className={Styles.body}>
					<ActionContext.Provider value={contextValue}>
						<Routes>
							<Route path='discovery' element={<Discovery />}></Route>
							<Route index element={contextValue.global ? (<Communication />) : (<Navigate to='/login'/>)} />
							<Route path='group' element={<Group />}></Route>
							<Route path='market' element={<Market />}></Route>
							<Route path='community' >
								<Route index element={<Community />} />
								<Route path='postmap' element={<Postmap />} />
							</Route>
							<Route path='organization'>
								<Route index element={<Organization />} />
								<Route path='member' element={<Member />} />
							</Route>
							<Route path='personal'>
								<Route index element={<Personal />}></Route>
								<Route path='identity' element={<Identity />}></Route>
								<Route path='profile' element={<Profile />}></Route>
								<Route path='setting' element={<Setting />}></Route>
								<Route path='qr' element={<QR />}></Route>
							</Route>
							<Route path='login'>
								<Route index element={<LogIn />} />
								<Route path='signin' element={<SignIn />} />
							</Route>
						</Routes>
					</ActionContext.Provider>
				</div>
				{contextValue.sheet}
				<TabBar />
			</div>
		</BrowserRouter>
	);
}
export default Router;