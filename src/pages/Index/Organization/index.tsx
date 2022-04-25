/*
 * @Author: yinwai
 * @Date:   2022-04-19 02:00:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 09:52:39
 */

import { Collapse, Steps } from "antd-mobile";
import React from "react";
import useAxios from "axios-hooks";
import { Loading, ErrorBlock } from 'components';
import Styles from './index.module.scss';

export interface Plan {
	title: string,
	status: "wait" | "process" | "finish" | "error" | undefined,
	description: string,
};

export interface Notice {
	title: string,
	content: string | Plan[],
};

export interface Plans {
	title: string,
	content: Plan[],
}

const Organization: React.FunctionComponent = () => {
	const { Step } = Steps;
	const [{ data, loading, error }] = useAxios('/organization/getInfo');
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	const { notices, plans }: { notices: Notice[], plans: Notice[] } = data;

	return (
		<React.Fragment>
			<div className={Styles.title}>通知</div>
			<Collapse accordion>{
				notices.map((item: Notice, index: number) =>
					(typeof item.content === 'string') ?
						(
							<Collapse.Panel key={index.toString()} title={item.title}>
								{item.content}
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
			<div className={Styles.title}>计划项</div>
			<Collapse accordion>{
				plans.map((item: Notice, index: number) =>
					(typeof item.content === 'string') ?
						(
							<Collapse.Panel key={index.toString()} title={item.title}>
								{item.content}
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
		</React.Fragment>
	);
}
export default Organization;