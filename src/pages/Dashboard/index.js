import React from 'react'
import {Row, Col} from 'antd'
import PageHeader from './PageHeader'
import PersonInfo from './PersonInfo'
import MedicalActivity from './MedicalActivity'
import WellnessData from './WellnessData'
import Exercise from './Exercise'
import Recomendation from './Recommendation'
import Notification from './Notification'
import Family from './Family'

import './index.less'


export default class Dashboard extends React.Component {


    render() {
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
            <div className="dashboard-page">
                <Row>
                    <PageHeader />  
                </Row>
                <Row className="dashboard-page-content" gutter={[20, 20]}>
                    <Col className="dashboard-page-content-left" xs={24} sm={24} md={24} lg={24} xl={17} xxl={16}>
                            <PersonInfo />
                            <MedicalActivity />
                            <WellnessData />
                            <Exercise title = {'Weight Change'} data = {mockWeightData} y_label = {"lbs"}/>
                    </Col>
                    <Col className="dashboard-page-content-right"  xs={24} sm={24} md={24} lg={24} xl={7} xxl={8}>
                        <Row>
                            <Recomendation />
                        </Row>
                        <Row>
                            <Notification />
                        </Row>
                        <Row>
                            <Family />
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}