/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:15:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 14:42:35
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './Default';
import CommonPage from './Common';
import './App.scss';


const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/*' element={<DefaultPage />}></Route>
				<Route path='/common/*' element={<CommonPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;