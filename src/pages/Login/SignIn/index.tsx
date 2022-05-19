/*
 * @Author: yinwai
 * @Date:   2022-05-19 13:39:24
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 15:21:06
 */

import { Radio, Space, Form, Input, Button } from "antd-mobile";
import useAxios from "axios-hooks";
import React from "react";
import Styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { Loading, ErrorBlock } from "components";
const SignIn: React.FunctionComponent = () => {
	const methods: { [name: string]: string } = { 'mobile': '手机号', 'email': '邮箱', 'name': '用户名' };
	type FieldType = { pass: string, account: string, loginMethod: 'name' | 'email' | 'phone' };
	const [form] = Form.useForm<FieldType>();
	const pass: string = Form.useWatch('pass', form);
	const account: string = Form.useWatch('account', form);
	const loginMethod: string = Form.useWatch('loginMethod', form);
	const generateRequest = () => ('pass=' + pass + '&' + loginMethod + '=' + account);
	const [{ data, loading, error }, executePost] = useAxios(
		{
			url: '/user/login',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			data: generateRequest(),
			method: 'POST'
		},
		{ manual: true });
	const navigate = useNavigate();
	const onFinish = async () => {
		await executePost();
		console.log(data);
		navigate('/');
	};
	return (
		<div className={Styles.root}>
			<div className="body">
				<Form form={form} layout='horizontal' mode='card' onFinish={onFinish}
					initialValues={{ loginMethod: 'name', pass: '', account: '' }}
					footer={
						<Button block type='submit' color='primary' size='large'>
							提交
						</Button>
					}>
					<Form.Header />
					<Form.Item name='loginMethod' label='登录方式'>
						<Radio.Group>
							<Space>
								{
									Object.entries(methods).map(([name, label]: [string, string], index: number) => (
										<Radio value={name} key={index}>{label}</Radio>
									))
								}
							</Space>
						</Radio.Group>
					</Form.Item>
					<Form.Item name='account' label={methods[loginMethod]}>
						<Input placeholder='请输入' />
					</Form.Item>
					<Form.Item name='pass' label='密码'>
						<Input placeholder='请输入' />
					</Form.Item>
					<Form.Header />
				</Form>
				{(loading ? <Loading /> : (error ? <ErrorBlock /> : <div />))}
			</div>
		</div>
	)
}
export default SignIn;