/*
 * @Author: yinwai
 * @Date:   2022-04-23 17:41:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-24 15:36:34
 */

export interface User {
	id: number,
	name: string,
	nick_name: string,
	avatar: string,
};

export interface Contact {
	user: User,
	lastMessage: string,
	lastTime: string,
	type: 'community' | 'group' | 'market' | 'organization',
}