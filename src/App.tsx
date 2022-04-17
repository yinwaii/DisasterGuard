/*
 * @Author: yinwai
 * @Date:   2022-04-17 21:15:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-17 22:26:23
 */

import React from 'react';

import Bottom from './components/Bottom'
import './App.css';
function App(): JSX.Element {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Bottom></Bottom>
			</header>
		</div>
	);
}

export default App;