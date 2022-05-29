/*
 * @Author: yinwai
 * @Date:   2022-04-19 14:54:07
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 15:32:32
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
	'shelter': 'circle',
	'healthcare': 'polygon',
	'transport': 'path'
}