/*
 * @Author: yinwai
 * @Date:   2022-04-19 02:13:44
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-20 14:05:51
 */

import { List, Dialog, Toast, Input, ImageUploader, AutoCenter } from "antd-mobile";
import React from "react";
import { tabs } from "./data";
import Styles from './index.module.scss'

export interface Tab {
	title: string,
	type: string,
	description: React.ReactNode
};

const Profile: React.FunctionComponent = () => {
	const upload = async (file: File) => {
		return {
			url: URL.createObjectURL(file),
		};
	};
	return (
		<React.Fragment>
			<List>{
				tabs.map((item: Tab, index: number) => (
					<List.Item extra={item.description} key={index} onClick={async () => {
						const result = await Dialog.confirm({
							title: '修改' + item.title + '信息',
							content: (<AutoCenter> {
								(item.type === 'image') ?
									(<ImageUploader maxCount={1} upload={upload} />) :
									(<Input placeholder={'请输入' + item.title} className={Styles.input} />)
							} </AutoCenter>),
							closeOnMaskClick: true
						})
						if (result) {
							Toast.show({ content: '点击了确认', position: 'bottom' })
						} else {
							Toast.show({ content: '点击了取消', position: 'bottom' })
						}
					}}>{item.title}</List.Item>
				))
			}</List>
		</React.Fragment>
	);
}
export default Profile;