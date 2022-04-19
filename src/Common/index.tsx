/*
 * @Author: yinwai
 * @Date:   2022-04-19 14:29:38
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-20 02:59:02
 */

import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import Group from './Group';
import Community from './Community';
import Organization from './Organization';
import Profile from './Profile';
import PageStyle from '../Page.module.scss';
import QR from "./QR";
import Setting from "./Setting";
import Identity from "./Identity";

const CommonPage: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const goBack = () => { navigate(-1) };
	return (
		<div className={PageStyle.root}>
			<div className='head'>
				<NavBar onBack={goBack}>DisasterGuard</NavBar>
			</div>
			<div className='body'>
				<Routes>
					<Route path='/group' element={<Group />}></Route>
					<Route path='/community' element={<Community />}></Route>
					<Route path='/organization' element={<Organization />}></Route>
					<Route path='/profile' element={<Profile />}></Route>
					<Route path='/qr' element={<QR />}></Route>
					<Route path='/setting' element={<Setting />}></Route>
					<Route path='/identity' element={<Identity />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default CommonPage;