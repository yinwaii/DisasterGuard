/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:15:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-18 22:26:10
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import Discovery from './pages/Discovery';
import Community from './pages/Community';
import Personal from './pages/Personal';
import Communication from './pages/Communication';

import Bottom from './components/Bottom'
import './App.scss';
const MainPage: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className='body'>
				<Routes>
					<Route path='/discovery' element={<Discovery />}></Route>
					<Route path='/community' element={<Community />}></Route>
					<Route path='/personal' element={<Personal />}></Route>
				</Routes>
			</div>
			<div className='bottom'>
				<Bottom />
			</div>
		</React.Fragment>
	);
}
function App(): JSX.Element {
	return (
		<Router>
			<div className='app'>
				<div className='head'>
					<NavBar back={null}>DisasterGuard</NavBar>
				</div>
				<Routes>
					<Route path='/*' element={<MainPage />}></Route>
					<Route path='/communication' element={<Communication />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;