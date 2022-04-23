/*
 * @Author: yinwai
 * @Date:   2022-04-21 19:55:01
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-23 17:43:31
 */

import { Post } from ".";

// export const posts: Post[] = [
// 	{
// 		avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 		name: '张三',
// 		content: '第一条content是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰',
// 		time: 'sdada',
// 		pics: [
// 			'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 			'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 			'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 			'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 			'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 		]
// 	},
// 	{
// 		avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
// 		name: '李四',
// 		content: '第二条content是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰',
// 		time: 'sdada',
// 		pics: []
// 	},
// 	{
// 		avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 		name: '李四',
// 		content: '第一条content是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰',
// 		time: 'sdada',
// 		pics: []
// 	},
// 	{
// 		avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
// 		name: '李四',
// 		content: '第二条content是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰',
// 		time: 'sdada',
// 		pics: []
// 	},
// 	{
// 		avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
// 		name: '李四',
// 		content: '第一条content是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰',
// 		time: 'sdada',
// 		pics: []
// 	},
// 	{
// 		avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
// 		name: '李四',
// 		content: '第二条content是大大大撒大萨达试点城市丰富阿萨法生产厂侧是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰是大大大撒大萨达试点城市丰',
// 		time: 'sdada',
// 		pics: []
// 	},
// ];