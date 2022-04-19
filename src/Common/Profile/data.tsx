/**
 * @Author: yinwai
 * @Date:   2022-04-19 14:49:50
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-19 14:51:23
 */

import { Avatar } from "antd-mobile";
import { SystemQRcodeOutline } from 'antd-mobile-icons';
import { Tab } from ".";
export const tabs: Tab[] = [
		{
			title: "头像",
		description: (<Avatar src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />)
		},
		{
			title: "名字",
			description: "张三"
		},
		{
			title: "ID",
			description: "sadsafasfsfs"
		},
		{
			title: "核酸码",
			description: (<SystemQRcodeOutline />)
		}
	];