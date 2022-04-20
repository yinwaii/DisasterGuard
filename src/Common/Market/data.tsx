/*
 * @Author: yinwai
 * @Date:   2022-04-20 16:10:01
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-20 17:49:05
 */

import { Shop, Tab, Goods } from ".";

export const shop: Shop = {
	name: "交大玉兰苑罗森",
	position: "东川路800号"
};

export const tabs: Tab[] = [
	{
		key: 'key1',
		title: '选项一',
	},
	{
		key: 'key2',
		title: '选项二',
	},
	{
		key: 'key3',
		title: '选项三',
	},
];

export const goods: Goods[] = [
	{
		preview: "https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/107831/6/21483/55375/61f657c9Ebcb7b07f/54f1334d9e4a78bd.jpg",
		name: "小米11青春活力版 骁龙778G处理器",
		description: 'kunjinkao',
		price: 2169.00
	},
	{
		preview: "https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/184678/26/23780/43697/625e92fdEcc5567ca/74ce4391fa5108ab.jpg",
		name: "vivo iQOO Neo5S 骁龙888 8+256G",
		description: 'kunjinkao',
		price: 2499.00
	},
	{
		preview: "https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/130934/7/27975/114209/625e8a40E9ae659eb/02bba37a08119b83.jpg",
		name: "vivo iQOO 9 Pro 8GB + 256GB 燃擎",
		description: 'kunjinkao',
		price: 4699.00
	}
];