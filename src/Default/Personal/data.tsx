/*
 * @Author: yinwai
 * @Date:   2022-04-19 15:20:45
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-20 02:57:46
 */

import { Profile, Tab } from ".";
import { SystemQRcodeOutline, SetOutline, UserCircleOutline } from "antd-mobile-icons";

export const profile: Profile = {
	id: 1000,
	avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
	agent: "yinwai",
	identity: "self"
};
export const tabs: Tab[] = [
	{
		icon: (<SystemQRcodeOutline />),
		name: "身份码",
		path: "/qr"
	},
	{
		icon: (<UserCircleOutline />),
		name: "身份管理",
		path: "/identity"
	},
	{
		icon: (<SetOutline />),
		name: "设置",
		path: "/setting"
	}
];