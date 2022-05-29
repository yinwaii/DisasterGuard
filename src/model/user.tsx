/*
 * @Author: yinwai
 * @Date:   2022-04-23 17:41:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 02:02:16
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

export interface Group {
	gid: number,
	name: string,
	desc: string
}