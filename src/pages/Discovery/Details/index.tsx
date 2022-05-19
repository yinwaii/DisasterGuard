/*
 * @Author: yinwai
 * @Date:   2022-04-24 20:05:21
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-05-19 15:22:39
 */

import useAxios from "axios-hooks";
import { Popup, Button } from "antd-mobile";
import { Detail } from "model/map";
import React from "react";
import { Loading, ErrorBlock } from 'components';
import { toUrl } from "utils/request";
import Styles from './index.module.scss';

interface DetailProps {
	id: number,
	modify: boolean,
	visible: boolean,
	onModify?: () => void
};

const Details: React.FunctionComponent<DetailProps> = ({ id, modify, visible, onModify }: DetailProps) => {
	const [{ data, loading, error }] = useAxios(toUrl('/map/getDetails', { id: String(id) }));
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	const { title, content }: Detail = data.data;
	return (
		<Popup visible={visible} mask={false} style={{ '--z-index': '999' }}>
			<div className={Styles.root}>
				<div className="head">{title}</div>
				<div className="body">{content}</div>
				<div className="foot">
					<Button className="button" onClick={onModify}>{modify ? '确定' : '编辑'}</Button>
					<Button className="button">添加</Button>
				</div>
			</div>
		</Popup>
	);
}

export default Details;