/*
 * @Author: yinwai
 * @Date:   2022-05-30 04:18:51
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 04:44:58
 */

import { Collapse, Steps, Button } from "antd-mobile";
import React from "react";
import useAxios from "axios-hooks";
import { Loading, ErrorBlock, useIssueNotice, useGlobal } from 'components';
import Styles from './index.module.scss';
import { useSearchParams } from "react-router-dom";
import { useActions, Action } from "components";
import { useDeleteNotice, useUpdateNotice } from "components/GroupManager";

export interface Notice {
	gaid: number,
	uid: number,
	gid: number,
	msg: string,
	status: string,
	create_time: string,
	update_time: string,
};

const Member: React.FunctionComponent = () => {
	const [searchParams] = useSearchParams();
	const [{ data, loading, error }, refetch] = useAxios('/group/getGroupApplyList?gid=' + searchParams.get('gid'));
	const [IssueNotice, issueNotice] = useIssueNotice(refetch);
	const [UpdateNotice, updateNotice] = useUpdateNotice(refetch);
	const [DeleteNotice, deleteNotice] = useDeleteNotice(refetch);
	const actions: Action[] = [
		{
			key: 'apply',
			text: '加入新组织',
			onClick: issueNotice
		},
	];
	useActions(actions);
	const [global] = useGlobal();
	const [privilege] = useAxios('/group/getUserPrivilegeInGroup?uid=' + (global ? String(global.uid) : '0') + '&gid=' + searchParams.get('gid'));
	if (loading || privilege.loading) return <Loading />;
	if (error || privilege.error) return <ErrorBlock />;
	console.log(privilege.data.data.privilege);
	// const { notices, plans }: { notices: Notice[], plans: Notice[] } = data;
	const notices: Notice[] = data.data;
	return (
		<React.Fragment>
			<div className={Styles.title}>通知</div>
			{IssueNotice}
			{UpdateNotice}
			{DeleteNotice}
			<Collapse accordion>{
				notices.map((item: Notice, index: number) =>
				(
					<Collapse.Panel key={index.toString()} title={item.uid.toString() + '@' + item.gaid.toString()}>
						<div>
							<div>{item.msg}</div>
							<div>创建时间：{item.create_time} 修改时间：{item.update_time}</div>
							{(privilege.data.data.privilege as string) === 'owner' ? (<Button onClick={updateNotice(item.uid)}>同意</Button>) : (<></>)}
							{(privilege.data.data.privilege as string) === 'owner' ? (<Button onClick={deleteNotice(item.uid)}>拒绝</Button>) : (<></>)}
						</div>
					</Collapse.Panel>
				)
				)
			}</Collapse>
		</React.Fragment >
	);
}
export default Member;