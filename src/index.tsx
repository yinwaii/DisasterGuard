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
	// baseURL: 'http://dormitory.ipangbo.top:3000/api/v1',
	withCredentials: true,
	baseURL: 'http://127.0.0.1:8000/api/v1'
})
axios.interceptors.request.use(
	config => {
		// if (localStorage.eleToken) {
		// 	config.headers.Authorization = localStorage.eleToken
		// }
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
configure({ axios });
export let config = ['1'];
ReactDOM.render(
	(
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	),
	document.getElementById('root') as HTMLElement
);