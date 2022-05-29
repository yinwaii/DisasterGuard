/**
 * @Author: yinwai
 * @Date:   2022-04-17 21:14:47
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-17 21:14:48
 */


import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Router } from 'components';
import Axios from 'axios';
import { configure } from 'axios-hooks';

// const axios = Axios.create({
// 	baseURL: 'http://127.0.0.1:4523/mock/898620',
// })
Axios.defaults.withCredentials = true;
const axios = Axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:8000/api/v1'
})
configure({ axios });
ReactDOM.render(
	(
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	),
	document.getElementById('root') as HTMLElement
);