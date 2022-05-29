/*
 * @Author: yinwai
 * @Date:   2022-04-25 11:07:34
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 03:31:38
 */

import { User } from "./user";

export interface Post {
	user: User;
	time: string,
	content: string,
	pics: string[]
};
export type GroupAction = [React.ReactNode, (() => void)];
export type NoticeAction = [React.ReactNode, ((arg0: any) => (() => void))];