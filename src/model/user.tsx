/*
 * @Author: yinwai
 * @Date:   2022-04-23 17:41:54
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 13:02:36
 */

export interface User {
	uid: number,
	name: string,
	nick_name: string,
	desc: string
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