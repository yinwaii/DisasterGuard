/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:15:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 17:31:37
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import { configure } from 'axios-hooks';
import DefaultPage from '../Default';
import CommonPage from '../Common';
import './App.scss';


const App: React.FunctionComponent = () => {
	const axios = Axios.create({
		baseURL: 'http://127.0.0.1:4523/mock/898620',
	})
	configure({ axios });
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