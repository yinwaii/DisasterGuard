/*
 * @Author: yinwai
 * @Date:   2022-04-19 02:00:06
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-22 02:24:58
 */

import { Collapse, Steps } from "antd-mobile";
import React from "react";
import { notices, plans } from "./data";
import Styles from './index.module.scss';

export interface Plan {
	title: string,
	status: "wait" | "process" | "finish" | "error" | undefined,
	description: string,
};

export interface Notice {
	title: string,
	content: string,
};

export interface Plans {
	title: string,
	content: Plan[],
}

const Organization: React.FunctionComponent = () => {
	const { Step } = Steps;
	return (
		<React.Fragment>
			<div className={Styles.title}>通知</div>
			<Collapse accordion>{
				notices.map((item: Notice, index: number) => (
					<Collapse.Panel key={index.toString()} title={item.title}>
						{item.content}
					</Collapse.Panel>
				))
			}</Collapse>
			<div className={Styles.title}>计划项</div>
			<Collapse accordion>{
				plans.map((item: Plans, index: number) => (
					<Collapse.Panel key={index.toString()} title={item.title}>
						<Steps direction="vertical">{
							item.content.map((item: Plan, index: number) => (
								<Step title={item.title} status={item.status} description={item.description} key={index} />
							))
						}</Steps>
					</Collapse.Panel>
				))
			}</Collapse>
		</React.Fragment>
	);
}
export default Organization;