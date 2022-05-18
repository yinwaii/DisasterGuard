/*
 * @Author: yinwai
 * @Date:   2022-04-19 14:54:07
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 01:12:08
 */

import { Tab } from ".";
export const tabs: Tab[] = [
	{
		key: 'supplies',
		title: '物资',
		type: 'marker',
		description: '物资存放点'
	},
	{
		key: 'shelter',
		title: '避难所',
		type: 'circle',
		description: '应急避难点'
	},
	{
		key: 'healthcare',
		title: '医疗点',
		type: 'polygon',
		description: '医疗团队驻地'
	},
	{
		key: 'transport',
		title: '交通运输',
		type: 'path',
		description: '交通枢纽'
	}
];