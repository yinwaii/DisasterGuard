/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:15:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-17 22:55:25
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import Discovery from './pages/Discovery';
import Community from './pages/Community';
import Personal from './pages/Personal';

import Bottom from './components/Bottom'
import './App.css';
function App(): JSX.Element {
	return (
		<Router>
			<div className='app'>
				<div className='head'>
					<NavBar>灾难守卫者</NavBar>
				</div>
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
			</div>
		</Router>
	);
}

export default App;