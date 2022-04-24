/*
 * @Author: yinwai
 * @Date:   2022-04-24 20:05:21
 * @Last Modified by:   yinwai
 * @Last Modified time: 2022-04-25 00:12:09
 */

import useAxios from "axios-hooks";
import { Popup } from "antd-mobile";
import { Detail } from "model/map";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Loading, ErrorBlock } from 'components';
import { toUrl } from "utils/request";
import Styles from './index.module.scss';

interface DetailProps {
	id: string
};

const MetaDetails: React.FunctionComponent<DetailProps> = ({ id }: DetailProps) => {
	const [{ data, loading, error }] = useAxios(toUrl('/map/getDetails', { id }));
	if (loading) return <Loading />;
	if (error) return <ErrorBlock />;
	const { title, content }: Detail = data;
	return (
		<Popup visible={true} mask={false} >
			<div className={Styles.root}>
				<div className="head">{title}</div>
				<div className="body">{content}</div>
				<div className="foot" />
			</div>
		</Popup>
	);
}

const Details: React.FunctionComponent = () => {
	const [searchParams] = useSearchParams();
	return (<MetaDetails id={searchParams.getAll('id')[0]} />);
};
export default Details;