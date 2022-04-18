/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:15:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 02:29:46
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import Discovery from './pages/Discovery';
import Communication from './pages/Communication';
import Personal from './pages/Personal';
import Group from './pages/Group';
import Community from './pages/Community';
import Organization from './pages/Organization';
import Profile from './pages/Profile';

import Bottom from './components/Bottom'
import './App.scss';
const MainPage: React.FunctionComponent = () => {
	return (
		<div className='app'>
			<div className='app head'>
				<NavBar back={null}>DisasterGuard</NavBar>
			</div>
			<div className='app body'>
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

const CommonPage: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const goBack = () => { navigate(-1) };
	return (
		<div className='app'>
			<div className='app head'>
				<NavBar onBack={goBack}>DisasterGuard</NavBar>
			</div>
			<div className='app body'>
				<Routes>
					<Route path='/group' element={<Group />}></Route>
					<Route path='/community' element={<Community />}></Route>
					<Route path='/organization' element={<Organization />}></Route>
					<Route path='/profile' element={<Profile />}></Route>
				</Routes>
			</div>
		</div>
	);
}

const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/*' element={<MainPage />}></Route>
				<Route path='/common/*' element={<CommonPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;