import React from 'react'
import './index.less'
import {Row,Col} from 'antd'
import AccountInfo from './accountInfo'
import AccountSettings from './accountSettings'
import PageHeader from '../../components/PageHeader'
import AccountPlaceHolder from './accountPlaceHoder'

export default class Account extends React.Component {
    render(){
        return (
        <div className="page-container">
            <PageHeader title="Account Settings" />
            <Row>
                <Col span="14" className="section-container">
                    <AccountInfo />
                    <AccountPlaceHolder />
                </Col>
                <Col span="10" className="section-container">
                    <AccountSettings />
                    <AccountPlaceHolder />
                </Col>
            </Row>
        </div>
        );
    }
}