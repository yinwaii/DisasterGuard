/**
 * @Author: yinwai
 * @Date:   2022-04-24 15:05:50
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-28 18:00:04
 */

export interface Params {
	[propName: string]: string
};

export const toUrl = (base: string, params: Params) => {
	let url: string = base + '?';
	for (const [key, value] of Object.entries(params))
		url += key + '=' + value + '&';
	return url;
};