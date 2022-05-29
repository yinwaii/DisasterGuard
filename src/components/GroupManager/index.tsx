/*
 * @Author: yinwai
 * @Date:   2022-05-29 21:07:27
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 05:08:51
 */

import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Dialog, AutoCenter, Input, TextArea } from "antd-mobile";
import Styles from './index.module.scss';
import { GroupAction, NoticeAction } from "model/group";
import { useSearchParams } from "react-router-dom";
export const useApplyGroup = () => {
	const [visible, setVisible] = useState<boolean>(false);
	const [gid, setGid] = useState<string>('');
	const [msg, setMsg] = useState<string>('');
	const getData = () => ("gid=" + gid + '&msg=' + msg);
	const [{ }, executePost] = useAxios({
		url: '/group/applyGroup',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: getData(),
		method: 'POST'
	},
		{ manual: true });
	const ApplyGroup = (
		<Dialog
			visible={visible}
			title="请输入要加入的群号"
			content={(<AutoCenter>
				<Input placeholder={'请输入群号'} className={Styles.input} onChange={(val: string) => setGid(val)} />
				<Input placeholder={'请输入验证信息'} className={Styles.input} onChange={(val: string) => setMsg(val)} />
			</AutoCenter>)}
			closeOnMaskClick closeOnAction
			onClose={()=>setVisible(false)}
			actions={[
				{
					key: 'submit',
					text: '提交',
					onClick: () => { executePost() }
				},
			]}
		/>)
	const res: GroupAction = [ApplyGroup, () => { setVisible(true) }];
	return res;
};
export const useCreateGroup = () => {
	const [visible, setVisible] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [desc, setDesc] = useState<string>('');
	const getData = () => ("name=" + name + '&desc=' + desc);
	const [{ }, executePost] = useAxios({
		url: '/group/createGroup',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: getData(),
		method: 'POST'
	},
		{ manual: true });
	const CreateGroup = (
		<Dialog
			visible={visible}
			title="请输入要创建的群组信息"
			content={(<AutoCenter>
				<Input placeholder={'请输入群名'} className={Styles.input} onChange={(val: string) => setName(val)} />
				<Input placeholder={'请输入群介绍'} className={Styles.input} onChange={(val: string) => setDesc(val)} />
			</AutoCenter>)}
			closeOnMaskClick closeOnAction
			onClose={() => setVisible(false)}
			actions={[
				{
					key: 'submit',
					text: '提交',
					onClick: () => { executePost() }
				},
			]}
		/>)
	const res: GroupAction = [CreateGroup, () => { setVisible(true) }];
	return res;
};
export const useIssueNotice = (refetch: any) => {
	const [visible, setVisible] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [searchParams] = useSearchParams();
	const getData = () => ("title=" + name + '&content=' + content + '&guest_viewable=1&gid=' + searchParams.get('gid'));
	const [{ }, executePost] = useAxios({
		url: '/group/issueNotice',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: getData(),
		method: 'POST'
	},
		{ manual: true });
	const IssueNotice = (
		<Dialog
			visible={visible}
			title="请输入要创建的公告信息"
			content={(<AutoCenter>
				<Input placeholder={'请输入标题'} className={Styles.input} onChange={(val: string) => setName(val)} />
				<TextArea placeholder='请输入公告' onChange={(val: string) => setContent(val)}/>
			</AutoCenter>)}
			closeOnMaskClick closeOnAction
			onClose={() => setVisible(false)}
			actions={[
				{
					key: 'submit',
					text: '提交',
					onClick: async () => { await executePost(); await refetch(); }
				},
			]}
		/>)
	const res: GroupAction = [IssueNotice, () => { setVisible(true) }];
	return res;
};
export const useUpdateNotice = (refetch: any) => {
	const [visible, setVisible] = useState<boolean>(false);
	const [nid, setNid] = useState<number>(0);
	const [content, setContent] = useState<string>('');
	const [searchParams] = useSearchParams();
	const getData = () => ("nid=" + nid + '&content=' + content + '&gid=' + searchParams.get('gid'));
	const [{ }, executePost] = useAxios({
		url: '/group/updateNotice',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: getData(),
		method: 'POST'
	},
		{ manual: true });
	const UpdateNotice = (
		<Dialog
			visible={visible}
			title="请输入要创建的公告信息"
			content={(<AutoCenter>
				<TextArea placeholder='请输入公告' onChange={(val: string) => setContent(val)} />
			</AutoCenter>)}
			closeOnMaskClick closeOnAction
			onClose={() => setVisible(false)}
			actions={[
				{
					key: 'submit',
					text: '提交',
					onClick: async () => { await executePost(); await refetch(); }
				},
			]}
		/>)
	const res: NoticeAction = [UpdateNotice, (nid: number) => (() => { setNid(nid); setVisible(true) })];
	return res;
};
export const useDeleteNotice = (refetch: any) => {
	const [visible, setVisible] = useState<boolean>(false);
	const [nid, setNid] = useState<number>(0);
	const [searchParams] = useSearchParams();
	const getData = () => ("nid=" + nid + '&gid=' + searchParams.get('gid'));
	const [{ }, executePost] = useAxios({
		url: '/group/deleteNotice',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: getData(),
		method: 'POST'
	},
		{ manual: true });
	const DeleteNotice = (
		<Dialog
			visible={visible}
			title="请确认是否要删除"
			closeOnMaskClick closeOnAction
			onClose={() => setVisible(false)}
			actions={[
				{
					key: 'submit',
					text: '确认',
					onClick: async () => { await executePost(); await refetch(); }
				},
			]}
		/>)
	const res: NoticeAction = [DeleteNotice, (nid: number) => (() => { setNid(nid); setVisible(true) })];
	return res;
};
export const useDealApply = (refetch: any) => {
	const [visible, setVisible] = useState<boolean>(false);
	const [gaid, setGaid] = useState<number>(0);
	const [action, setAction] = useState<string>("accept");
	const getData = () => ("gaid=" + gaid + '&action=' + action);
	const [{ }, executePost] = useAxios({
		url: '/group/dealGroupApply',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: getData(),
		method: 'POST'
	},
		{ manual: true });
	const DealApply = (
		<Dialog
			visible={visible}
			title="请确认是否要处理申请"
			closeOnMaskClick closeOnAction
			onClose={() => setVisible(false)}
			actions={[
				{
					key: 'submit',
					text: '确认',
					onClick: async () => { await executePost(); await refetch(); }
				},
			]}
		/>)
	const res: NoticeAction = [DealApply, (params: any) => (() => { setGaid(params.gaid); setAction(params.action); setVisible(true) })];
	return res;
};