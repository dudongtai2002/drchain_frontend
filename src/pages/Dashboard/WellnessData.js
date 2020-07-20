import React from 'react'
import {Card, Row, Col} from 'antd'

import './WellnessData.less'
export default class WellnessData extends React.Component {

    render(){

        return (
            <Card className="wellness" title="Wellness Data" extra={<a><img src="/assets/icon/dashboard/setting.svg" alt="setting"/></a>}>
                <Row gutter={[20,20]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                        <Card 
                            className="wellness-part"
                            title={<img src="/assets/icon/dashboard/waterdrop.svg" alt="waterdrop"></img>}
                            extra={<a><img src="/assets/icon/dashboard/delete.svg" alt="delete"/></a>}
                        >
                            <div className="wellness-part-name">Blood Pressure</div>
                            <div className="wellness-part-param">
                                <span className="wellness-part-amount">141/90</span>
                                <span className="wellness-part-unit">mmhg</span>
                            </div>
                            <div className="wellness-part-info">
                                Ideal Blood Pressure
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                    <Card 
                            className="wellness-part"
                            title={<img src="/assets/icon/dashboard/heart.svg" alt="heart"></img>}
                            extra={<a><img src="/assets/icon/dashboard/delete.svg" alt="delete"/></a>}
                        >
                            <div className="wellness-part-name">Heart Rate</div>
                            <div className="wellness-part-param">
                                <span className="wellness-part-amount">160</span>
                                <span className="wellness-part-unit">mbp</span>
                            </div>
                            <div className="wellness-part-info">
                                Tachycardia
                            </div>
                        </Card>   
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                        <Card 
                            className="wellness-part"
                            title={<img src="/assets/icon/dashboard/moon.svg" alt="moon"></img>}
                            extra={<a><img src="/assets/icon/dashboard/delete.svg" alt="delete"/></a>}
                        >
                            <div className="wellness-part-name">Sleep</div>
                            <div className="wellness-part-param">
                                <span className="wellness-part-amount">8</span>
                                <span className="wellness-part-unit">h</span>
                                <span className="wellness-part-amount">15</span>
                                <span className="wellness-part-unit">m</span>
                            </div>
                            <div className="wellness-part-info">
                                Restful: 7h 45m(94%)
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                        <Card 
                            className="wellness-part"
                            title={<img src="/assets/icon/dashboard/people.svg" alt="people"></img>}
                            extra={<a><img src="/assets/icon/dashboard/delete.svg" alt="delete"/></a>}
                        >
                            <div className="wellness-part-name">Body Fat</div>
                            <div className="wellness-part-param">
                                <span className="wellness-part-amount">28%</span>
                            </div>
                            <div className="wellness-part-info">
                                Acceptable
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                        <Card 
                            className="wellness-add"
                        >
                            <div className="wellness-add-title">
                                Add a Device
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Card>
        );
    }
}