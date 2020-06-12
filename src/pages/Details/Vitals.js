import React from 'react'
import {Card, Row, Col} from 'antd'
import './Vitals.less'
export default class Vitals extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            userDetails: {
                bp: "104/65",
                pulse: "65",
                temp: "97.5 °F (36.6 °C) (Oral)",
                height: "5’ 9’’ (1.75m)",
                weight: "178 lb (80.7kg)",
                spo2: "98%"
            }
        })
    }
    render() {
        return (
            <div className="body-section">
                <Card title="Vitals">
                    <Row className="vital-info-row">
                        <Col span="14" className="vital-info-section">
                            <Col span="10" className="vital-info-label">BP</Col>
                            <Col span="14" className="vital-info-content">{this.state.userDetails.bp}</Col>
                        </Col>
                        <Col span="10" className="vital-info-section">
                            <Col span="10" className="vital-info-label">Pulse</Col>
                            <Col span="14" className="vital-info-content">{this.state.userDetails.pulse}</Col>
                        </Col>
                    </Row>
                    <Row className="vital-info-row">
                        <Col span="14" className="vital-info-section">
                            <Col span="10" className="vital-info-label">Temp</Col>
                            <Col span="14" className="vital-info-content">{this.state.userDetails.temp}</Col>
                        </Col>
                        <Col span="10" className="vital-info-section">
                            <Col span="10" className="vital-info-label">Height</Col>
                            <Col span="14" className="vital-info-content">{this.state.userDetails.height}</Col>
                        </Col>
                    </Row>
                    <Row className="vital-info-row">
                        <Col span="14" className="vital-info-section">
                            <Col span="10" className="vital-info-label">Weight</Col>
                            <Col span="14" className="vital-info-content">{this.state.userDetails.weight}</Col>
                        </Col>
                        <Col span="10" className="vital-info-section">
                            <Col span="10" className="vital-info-label">Sp02</Col>
                            <Col span="14" className="vital-info-content">{this.state.userDetails.spo2}</Col>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}