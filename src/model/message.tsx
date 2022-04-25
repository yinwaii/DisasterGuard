/*
 * @Author: yinwai
 * @Date:   2022-04-25 11:07:34
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 11:08:00
 */

import { User } from "./user";

export interface Post {
	user: User;
	time: string,
	content: string,
	pics: string[]
};