import React from 'react'
import './index.less'
import {Card, Row, Col, Icon} from 'antd'
import AccountInfo from './accountInfo'
import AccountSettings from './accountSettings'
import PageHeader from '../../components/PageHeader'
import AccountWellnessChart from './accountWellnessChart'

export default class Account extends React.Component {
    render(){
        const mockStressData = [
            {
                day: "Sat",
                value: 108
            },
            {
                day: "Sun",
                value: 110
            },
            {
                day: "Mon",
                value: 116
            },
            {
                day: "Tue",
                value: 115
            },
            {
                day: "Wed",
                value: 105
            },
            {
                day: "Thu",
                value: 115
            },
            {
                day: "Fri",
                value: 113
            }
        ];

        const mockWeightData = [
            {
                day: "Sat",
                value: 176
            },
            {
                day: "Sun",
                value: 173
            },
            {
                day: "Mon",
                value: 172
            },
            {
                day: "Tue",
                value: 172
            },
            {
                day: "Wed",
                value: 169
            },
            {
                day: "Thu",
                value: 170
            },
            {
                day: "Fri",
                value: 165
            }
        ];

        return (
        <div className="account-container">
            <PageHeader title="Account Dashboard" icons={[<Icon type="reload" />, <Icon type="more" />]}/>
            <Card className="card-wrap" >
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={14} className="section-container">
                        <AccountInfo />
                        <AccountWellnessChart title = {'Weekly Stress Level'} 
                                              data = {mockStressData}
                                              y_label = {"SRRS"}/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={10} className="section-container">
                        <AccountSettings />
                        <AccountWellnessChart title = {'Weight Change'} 
                                              data = {mockWeightData}
                                              y_label = {"lbs"}/>
                    </Col>
                </Row>
            </Card>    
        </div>
        );
    }
}