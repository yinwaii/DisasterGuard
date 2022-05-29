/*
 * @Author: yinwai
 * @Date:   2022-05-19 13:39:24
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-29 19:52:20
 */

import { Radio, Space, Form, Input, Button } from "antd-mobile";
import useAxios from "axios-hooks";
import React from "react";
import Styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { Loading, ErrorBlock } from "components";
const SignIn: React.FunctionComponent = () => {
	const methods = [
		{
			name: 'nick_name',
			label: '昵称',
			type: 'text'
		},
		{
			name: 'name',
			label: '用户名',
			type: 'text'
		},
		{
			name: 'email',
			label: '邮箱',
			type: 'email'
		},
		{
			name: 'phone',
			label: '手机号',
			type: 'tel'
		},
		{
			name: 'pass',
			label: '密码',
			type: 'password'
		}
	]
	// const methods: { [name: string]: string } = { 'nick_name': '昵称', 'name': '用户名', 'email': '电子邮箱', 'phone': '手机号', 'pass': '密码' };
	type FieldType = { name: string, nick_name: string, email: string, phone: string, pass: string };
	const [form] = Form.useForm<FieldType>();
	const pass: string = Form.useWatch('pass', form);
	const name: string = Form.useWatch('name', form);
	const nick_name: string = Form.useWatch('nick_name', form);
	const email: string = Form.useWatch('email', form);
	const phone: string = Form.useWatch('phone', form);
	const generateRequest = () => ('nick_name='+nick_name+'&name='+name+'&email='+email+'&phone='+phone+'&pass='+pass);
	const [{ data, loading, error }, executePost] = useAxios(
		{
			url: '/user/signup',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			data: generateRequest(),
			method: 'POST'
		},
		{ manual: true });
	const navigate = useNavigate();
	const onFinish = () => {
		if (data && data.code === 0)
			navigate('..');
		// await navigate('/');
	};
	const onSignIn = () => {
		navigate('..');
	}
	return (
		<div className={Styles.root}>
			<div className="body">
				<Form form={form} layout='horizontal' mode='card' onFinish={executePost}
					initialValues={{ loginMethod: 'name', pass: '', account: '' }}
					footer={
						<div className="foot">
							<Button className="submit" onClick={onSignIn} color='default'>
								返回
							</Button>
							<Button className="submit" type='submit' color='primary'>
								提交
							</Button>
						</div>
					}>
					<Form.Header />
					{
						methods.map(({name, label, type}, index: number) => (
							<Form.Item name={name} label={label} key={index}>
								<Input placeholder="请输入" type={type}/>
							</Form.Item>
						))
					}
				</Form>
				{(loading ? <Loading /> : (error ? <ErrorBlock /> : onFinish()))}
			</div>
		</div>
	)
}
export default SignIn;