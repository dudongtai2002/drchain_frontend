import React from 'react'
import './index.less'
import {Card, Row, Col} from 'antd'
import AccountInfo from './accountInfo'
import AccountSettings from './accountSettings'
import PageHeader from '../../components/PageHeader'
import AccountPlaceHolder from './accountPlaceHoder'

export default class Account extends React.Component {
    render(){
        return (
        <div className="account-container">
            <PageHeader title="Account Settings" />
            <Card className="card-wrap" >
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={14} className="section-container">
                        <AccountInfo />
                        <AccountPlaceHolder />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={10} className="section-container">
                        <AccountSettings />
                        <AccountPlaceHolder />
                    </Col>
                </Row>
            </Card>    
        </div>
        );
    }
}