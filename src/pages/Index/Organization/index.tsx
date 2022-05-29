/*
 * @Author: yinwai
 * @Date:   2022-04-19 02:00:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-30 05:05:57
 */

import { Collapse, Steps, Button } from "antd-mobile";
import React from "react";
import useAxios from "axios-hooks";
import { Loading, ErrorBlock, useIssueNotice, useGlobal } from 'components';
import Styles from './index.module.scss';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useActions, Action } from "components";
import { useDeleteNotice, useUpdateNotice } from "components/GroupManager";

export interface Plan {
	title: string,
	status: "wait" | "process" | "finish" | "error" | undefined,
	description: string,
};

export interface Notice {
	nid: number,
	title: string,
	content: string | Plan[],
};

export interface Plans {
	title: string,
	content: Plan[],
}

const Organization: React.FunctionComponent = () => {
	const { Step } = Steps;
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [{ data, loading, error }, refetch] = useAxios('/group/getNotice?gid=' + searchParams.get('gid'));
	const [IssueNotice, issueNotice] = useIssueNotice(refetch);
	const [UpdateNotice, updateNotice] = useUpdateNotice(refetch);
	const [DeleteNotice, deleteNotice] = useDeleteNotice(refetch);
	const actions: Action[] = [
		{
			key: 'apply',
			text: '加入新组织',
			onClick: issueNotice
		},
		{
			key: 'applyManage',
			text: '管理入群信息',
			onClick: () => navigate('member?gid=' + searchParams.get('gid'))
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
					(typeof item.content === 'string') ?
						(
							<Collapse.Panel key={index.toString()} title={item.title}>
								<div>
									<div>{item.content}</div>
									{(privilege.data.data.privilege as string) === 'owner' ? (<Button onClick={updateNotice(item.nid)}>修改</Button>) : (<></>)}
									{(privilege.data.data.privilege as string) === 'owner' ? (<Button onClick={deleteNotice(item.nid)}>删除</Button>) : (<></>)}
							</div>
							</Collapse.Panel>
			) :
			(
			<Collapse.Panel key={index.toString()} title={item.title}>
				<Steps direction="vertical">{
					item.content.map((item: Plan, index: number) => (
						<Step title={item.title} status={item.status} description={item.description} key={index} />
					))
				}</Steps>
			</Collapse.Panel>
			)
			)
			}</Collapse>
		</React.Fragment >
	);
}
export default Organization;