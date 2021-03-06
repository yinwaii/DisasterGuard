/*
 * @Author: yinwai
 * @Date:   2022-04-19 14:54:07
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 13:04:30
 */

import { Tab } from ".";
export const tabs: Tab[] = [
	{
		key: 'supplies',
		title: '物资',
		description: '物资存放点'
	},
	{
		key: 'shelter',
		title: '避难所',
		description: '应急避难点'
	},
	{
		key: 'healthcare',
		title: '医疗点',
		description: '医疗团队驻地'
	},
	{
		key: 'transport',
		title: '交通运输',
		description: '交通枢纽'
	}
];
export const typeMap: { [index: string]: string } = {
	'supplies': 'marker',
	'shelter': 'marker',
	'healthcare': 'marker',
	'transport': 'marker'
}